class CustomerJS {
    loadData() {
        $.ajax({
            url: "https://localhost:44370/api/Customer/Get",
            method: "GET",
            success: function (data) {
                debugger
                CusJS.builDataIntoTable(data);
            },
            error: function () {
                debugger
                console.log("Có lỗi khi lấy dữ liệu")
            }
        });
    }
}

var CJS = new CustomerJS();
CJS.loadData();

var CusJS = Object.create({
    // Hàm build dữ liệu lên table
    // Created by NVTuan ngày 29/3/2019
    builDataIntoTable: function (data) {
        debugger
        var table = $('#tbodyCustomer');
        table.html('');
        var column = $('#tableCustomer tr th'); // Lấy thông tin các cột dữ liệu
        var fieldData = []; // Khai báo một mảng để lưu các fielData
        $.each(column,function (index, item) {
            var itemFieldData = $(item).attr('fielData'); // Thấy trường nào có fieldData thì lấy tên thuộc tính của trường đó
        });
        $.each(data, function (item, index) {
            var htmlItem = [];
            htmlItem.push('<tr>'); // Thêm thẻ mở td của một hàng vào mảng htmlItem
            $.each(fieldData, function (indexFile, valueFiled) {
                var value = item[valueFiled]; // Lấy giá trị mỗi trường
                htmlItem.push('<td>' + value + '<td>');
            });
            htmlItem.push('</tr>');
            table.append(htmlItem.join(""));
        });
    }
});