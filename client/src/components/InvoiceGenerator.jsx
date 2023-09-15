import React, { Fragment } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const InvoiceGenerator = () => {
  function addQrCodeToPdf(qrCodeDataUrl, pdf) {
    const qrImg = new Image();
    qrImg.src = qrCodeDataUrl;

    // Define the position where you want to add the QR code (xPosition, yPosition)
    const xPosition = 450; // Example position (adjust as needed)
    const yPosition = 50; // Example position (adjust as needed)

    qrImg.onload = function () {
      const qrWidth = 60; // Set the width of the QR code image
      const qrHeight = (qrImg.height * qrWidth) / qrImg.width; // Maintain aspect ratio

      // Add QR code image to the PDF at a specific position
      pdf.addImage(
        qrCodeDataUrl,
        "PNG",
        xPosition,
        yPosition,
        qrWidth,
        qrHeight
      );

      // Save or display the PDF with the QR code
      pdf.save("invoice_with_qr.pdf"); // Save the PDF
      // OR
      // window.open(pdf.output('datauristring')); // Open the PDF in a new tab
    };
  }

  function GenerateInvoice() {
    html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: [612, 792],
      });
      pdf.internal.scaleFactor = 1;
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      // Assuming you have a QR code data URL in qrCodeDataUrl variable
      const qrCodeDataUrl =
        "https://chart.googleapis.com/chart?cht=qr&chl=hello&chs=180x180&choe=UTF-8&chld=L|2"; // Replace with actual QR code data URL

      // Add QR code to the PDF
      addQrCodeToPdf(qrCodeDataUrl, pdf);
    });
  }
  return (
    <Fragment>
      <div
        class="max-w-3xl mx-auto p-6 bg-white rounded shadow-sm my-6"
        id="invoiceCapture"
      >
        <div class="grid grid-cols-2 items-center">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="company-logo"
              height="100"
              width="100"
            />
          </div>
        </div>
        <div class="text-left mt-10">
          <p>Tailwind Inc.</p>
          <p class="text-gray-500 text-sm">sales@tailwindcss.com</p>
          <p class="text-gray-500 text-sm mt-1">+41-442341232</p>
          <p class="text-gray-500 text-sm mt-1">VAT: 8657671212</p>
        </div>
        <div class="grid grid-cols-2 items-center mt-8">
          <div>
            <p class="font-bold text-gray-800">Bill to :</p>
            <p class="text-gray-500">
              Laravel LLC.
              <br />
              102, San-Fransico, CA, USA
            </p>
            <p class="text-gray-500">info@laravel.com</p>
          </div>

          <div class="text-right">
            <p class="">
              Invoice number:
              <span class="text-gray-500">INV-2023786123</span>
            </p>
            <p>
              Invoice date: <span class="text-gray-500">03/07/2023</span>
              <br />
              Due date:<span class="text-gray-500">31/07/2023</span>
            </p>
          </div>
        </div>

        <div class="-mx-4 mt-8 flow-root sm:mx-0">
          <table class="min-w-full">
            <colgroup>
              <col class="w-full sm:w-1/2" />
              <col class="sm:w-1/6" />
              <col class="sm:w-1/6" />
              <col class="sm:w-1/6" />
            </colgroup>
            <thead class="border-b border-gray-300 text-gray-900">
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Items
                </th>
                <th
                  scope="col"
                  class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Price
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
                >
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200">
                <td class="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div class="font-medium text-gray-900">
                    E-commerce Platform
                  </div>
                  <div class="mt-1 truncate text-gray-500">
                    Laravel based e-commerce platform.
                  </div>
                </td>
                <td class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                  500.0
                </td>
                <td class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                  $100.00
                </td>
                <td class="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                  $5,000.00
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th
                  scope="row"
                  colspan="3"
                  class="hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                >
                  Subtotal
                </th>
                <th
                  scope="row"
                  class="pl-6 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"
                >
                  Subtotal
                </th>
                <td class="pl-3 pr-6 pt-6 text-right text-sm text-gray-500 sm:pr-0">
                  $10,500.00
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  colspan="3"
                  class="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                >
                  Tax
                </th>
                <th
                  scope="row"
                  class="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
                >
                  Tax
                </th>
                <td class="pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0">
                  $1,050.00
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  colspan="3"
                  class="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                >
                  Discount
                </th>
                <th
                  scope="row"
                  class="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
                >
                  Discount
                </th>
                <td class="pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0">
                  - 10%
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  colspan="3"
                  class="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
                >
                  Total
                </th>
                <th
                  scope="row"
                  class="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
                >
                  Total
                </th>
                <td class="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                  $11,550.00
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <button onClick={GenerateInvoice} style={{ color: "red" }}>
        Generate-Invoice
      </button>
    </Fragment>
  );
};

export default InvoiceGenerator;
