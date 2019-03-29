class CustomerJS {
    // Hàm loadData để gọi api lấy dữ liệu đổ về
    // Created by NVTuan ngày 29/3/2019
    loadData() {
        $.ajax({
            url: "https://localhost:44370/api/Customer/Get",
            method: "GET",
            success: function (data) {
                debugger
                //var dataCustomer = JSON.stringify(data); // Chuyển dữ liệu trả về từ Object sang chuỗi JSON
                CusJS.builDataIntoTable(data);
            },
            error: function () {
                console.log("Có lỗi khi lấy dữ liệu");
            }
        });
    }
}

$(document).ready(function () {
    var CJS = new CustomerJS();
    CJS.loadData();
});

var CusJS = Object.create({
    // Hàm build dữ liệu lên table
    // Created by NVTuan ngày 29/3/2019
    builDataIntoTable: function (data) {
        debugger
        var table = $('#tbodyCustomer');
        table.html('');
        var column = $('#tableCustomer thead tr th'); // Lấy thông tin các cột dữ liệu
        var fieldData = []; // Khai báo một mảng để lưu các fieldData
        $.each(column,function (index, item) {
            var itemFieldData = $(item).attr('fieldData'); // Thấy trường nào có fieldData thì lấy tên thuộc tính của trường đó
            fieldData.push(itemFieldData);
        });
        data.forEach(function (item, index) {
            debugger
            var htmlItem = [];
            htmlItem.push('<tr>'); // Thêm thẻ mở td của một hàng vào mảng htmlItem
            fieldData.forEach(function (value, index) { // Duyệt lần lượt các dòng
                var valueCustomer = item[value]; // Lấy giá trị mỗi cột
                htmlItem.push('<td>' + valueCustomer + '<td>');
            });
            htmlItem.push('</tr>');
            table.append(htmlItem.join(""));
        });
    }
});