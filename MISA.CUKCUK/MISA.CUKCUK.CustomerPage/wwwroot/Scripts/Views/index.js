$(document).ready(function () {
    CJS.loadData();// Gọi hàm load dữ liệu lên bảng
    var buttons = [{ text: "Lưu" }, { text: "Hủy" }, { text: "Giúp" }];
    testDialog = new Dialog("#dialogCustomer", 400, 400, buttons);
});

class CustomerJS {

    constructor(name) {
        this.Adress = name;
        this.initEvents();
        this.DialogDetail = new Dialog("#dialogCustomer", 400, 400);
    }

    // Hàm khởi tạo các sự kiện
    // Created by NVTuan - 1/4/2019
    initEvents() {
        $('#tableCustomer').on('click', '#tbodyCustomer tr', CusObject.rowSelected); // Gọi hàm chọn một bản ghi 
    }   

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

    }

    // Hàm nhân bản một row
    //Created by NVTuan ngày 1/4/2019
    dupplicateRow() {

    }

    // Hàm sửa một row
    //Created by NVTuan ngày 1/4/2019
    editRow() {

    }

    // Hàm xóa một row
    //Created by NVTuan ngày 1/4/2019
    deleteRow() {

    }

    // Hàm nạp dữ liệu
    //Created by NVTuan ngày 1/4/2019
    refreshData() {

    }
}
var CJS = new CustomerJS(); // Khởi tạo đối tượng