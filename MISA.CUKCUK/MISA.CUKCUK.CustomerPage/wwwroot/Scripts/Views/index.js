class CustomerJS {
    // Hàm loadData để gọi api lấy dữ liệu đổ về
    // Created by NVTuan ngày 29/3/2019
    loadData() {
        $.ajax({
            url: "https://localhost:44370/api/Customer/Get",
            method: "GET",
            success: function (data) {
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
        var table = $('#tbodyCustomer');
        table.html('');
        var column = $('#tableCustomer thead tr th'); // Lấy thông tin các cột dữ liệu
        var fieldData = []; // Khai báo một mảng để lưu các fieldData
        $.each(column, function (index, item) {
            var itemFieldData = $(item).attr('fieldData'); // Lấy giá trị của các fielData
            fieldData.push(itemFieldData);
        });
        data.forEach(function (item, index) {
            var htmlItem = [];
            htmlItem.push('<tr>'); // Thêm thẻ mở td của một hàng vào mảng htmlItem
            fieldData.forEach(function (valueField, indexField) { // Duyệt mang fieldData
                var value = item[valueField]; // Lấy giá trị của từng cột
                htmlItem.push('<td>' + value + '</td>'); // Push vào mảng htmlItem
            });
            htmlItem.push('</tr>');
            table.append(htmlItem.join(""));
        });
    }
});