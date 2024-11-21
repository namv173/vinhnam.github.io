document.getElementById('recharge-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const network = document.getElementById('network').value;
    const pin = document.getElementById('pin').value;
    const serial = document.getElementById('serial').value;

    // Kiểm tra tính hợp lệ của mã thẻ và số seri (ví dụ đơn giản)
    if (pin.length < 10 || serial.length < 10) {
        showMessage('Mã thẻ hoặc số seri không hợp lệ!', 'error');
        return;
    }

    // Thực hiện gửi dữ liệu đến server (ví dụ chỉ là thông báo thành công)
    showMessage('Đang xử lý... vui lòng chờ', 'success');

    // Simulate API call (trong thực tế bạn sẽ gọi một API tại đây)
    setTimeout(() => {
        // Giả lập trả về kết quả từ server
        const isSuccess = Math.random() > 0.5; // Random thành công hay thất bại

        if (isSuccess) {
            showMessage('Nạp thẻ thành công!', 'success');
        } else {
            showMessage('Nạp thẻ thất bại! Vui lòng thử lại.', 'error');
        }
    }, 2000);
});

function showMessage(message, type) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p class="${type}">${message}</p>`;
}
