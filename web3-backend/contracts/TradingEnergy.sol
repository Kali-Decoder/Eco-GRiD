// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract EnergyTradingSystem {
    address public owner;
    IERC20 public energyToken;

    enum OrderType { Buy, Sell }

    struct Order {
        address trader;
        OrderType orderType;
        uint256 amount;
        uint256 price;
    }

    Order[] public orders;

    mapping(address => uint256) public energyBalances;

    event OrderPlaced(address indexed trader, OrderType orderType, uint256 amount, uint256 price);
    event TradeExecuted(address indexed buyer, address indexed seller, uint256 amount, uint256 price);

    constructor(address _energyTokenAddress) {
        owner = msg.sender;
        energyToken = IERC20(_energyTokenAddress);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function placeOrder(OrderType _orderType, uint256 _amount, uint256 _price) external {
        require(_amount > 0, "Amount must be greater than 0");
        require(_price > 0, "Price must be greater than 0");

        if (_orderType == OrderType.Sell) {
            require(energyBalances[msg.sender] >= _amount, "Insufficient energy balance");
        }

        Order memory order = Order({
            trader: msg.sender,
            orderType: _orderType,
            amount: _amount,
            price: _price
        });

        orders.push(order);
        emit OrderPlaced(msg.sender, _orderType, _amount, _price);
    }

    function executeTrade(uint256 _orderIndex, uint256 _amount) external {
        require(_orderIndex < orders.length, "Invalid order index");
        Order storage order = orders[_orderIndex];
        require(order.trader != address(0), "Order not found");
        require(_amount > 0, "Amount must be greater than 0");
        require(energyBalances[msg.sender] >= _amount, "Insufficient energy balance");

        uint256 tradeAmount = (_amount < order.amount) ? _amount : order.amount;
        uint256 tradeValue = tradeAmount * order.price;

        if (order.orderType == OrderType.Sell) {
            require(energyToken.transferFrom(order.trader, msg.sender, tradeAmount), "Transfer failed");
            energyBalances[order.trader] -= tradeAmount;
            energyBalances[msg.sender] += tradeAmount;
        } else {
            require(energyToken.transferFrom(msg.sender, order.trader, tradeAmount), "Transfer failed");
            energyBalances[order.trader] += tradeAmount;
            energyBalances[msg.sender] -= tradeAmount;
        }

        order.amount -= tradeAmount;

        if (order.amount == 0) {
            deleteOrder(_orderIndex);
        }

        emit TradeExecuted(msg.sender, order.trader, tradeAmount, order.price);
    }

    function deleteOrder(uint256 _orderIndex) internal {
        if (_orderIndex < orders.length - 1) {
            orders[_orderIndex] = orders[orders.length - 1];
        }
        orders.pop();
    }

    function depositEnergy(uint256 _amount) external {
        require(_amount > 0, "Amount must be greater than 0");
        require(energyToken.transferFrom(msg.sender, address(this), _amount), "Transfer failed");
        energyBalances[msg.sender] += _amount;
    }

    function withdrawEnergy(uint256 _amount) external {
        require(_amount > 0, "Amount must be greater than 0");
        require(energyBalances[msg.sender] >= _amount, "Insufficient energy balance");
        energyBalances[msg.sender] -= _amount;
        require(energyToken.transfer(msg.sender, _amount), "Transfer failed");
    }

    function getOrderCount() external view returns (uint256) {
        return orders.length;
    }
}
