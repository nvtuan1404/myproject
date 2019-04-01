class CustomerJS {

    // Hàm loadData để gọi api lấy dữ liệu đổ về
    // Created by NVTuan ngày 29/3/2019
    loadData() {
        $.ajax({
            url: "https://localhost:44370/api/Customer/Get",
            method: "GET",
            success: function (data) {
                CusObject.builDataIntoTable(data);
            },
            error: function () {
                console.log("Có lỗi khi lấy dữ liệu");
            }
        });
    }

    // Hàm thêm một row
    //Created by NVTuan ngày 1/4/2019
    addRow() {
        var id = $('.rowSelected').attr('customerId'); // Lấy ra biến id của row
        alert(id);
    }

    // Hàm nhân bản một row
    //Created by NVTuan ngày 1/4/2019
    dupplicateRow() {
        var id = $('.rowSelected').attr('customerId'); // Lấy ra biến id của row
        alert(id);
    }

    // Hàm sửa một row
    //Created by NVTuan ngày 1/4/2019
    editRow() {
        var id = $('.rowSelected').attr('customerId'); // Lấy ra biến id của row
        alert(id);
    }

    // Hàm xóa một row
    //Created by NVTuan ngày 1/4/2019
    deleteRow() {
        var id = $('.rowSelected').attr('customerId'); // Lấy ra biến id của row
        alert(id);
    }

    // Hàm nạp dữ liệu
    //Created by NVTuan ngày 1/4/2019
    refreshData() {
        var id = $('.rowSelected').attr('customerId'); // Lấy ra biến id của row
        alert(id);
    }

}

$(document).ready(function () {
    var CJS = new CustomerJS(); // Khởi tạo đối tượng
    CJS.loadData();// Gọi hàm load dữ liệu lên bảng
    $('#tableCustomer').on('click', '#tbodyCustomer tr', CusObject.rowSelected); // Gọi hàm chọn một bản ghi 
    //$('#btnAdd').on('click', CJS.addRow); // Gọi hàm thêm một hàng
    $('#btnDupplicate').on('click', CJS.dupplicateRow); // Gọi hàm nhân bản một hàng
    $('#btnEdit').on('click', CJS.editRow); // Gọi hàm sửa một hàng
    $('#btnDelete').on('click', CJS.deleteRow); // Gọi hàm xóa một hàng
    $('#btnRefresh').on('click', CJS.refreshData); // Gọi hàm nạp dữ liệu
    $('#btnAdd').click(function () {
        dialog = $("#dialogCustomer").dialog({
            autoOpen: true,
            height: 334,
            width: 680,
            modal: true,
            buttons: {
                "Cất": function () {
                },
                "Đóng": function () {
                    dialog.dialog("close");
                }
            },
            close: function () {
               
            }

        });
    });
});
