﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MISA.CUKCUK.CustomerPage.Models
{
    /// <summary>
    /// Lớp Customer khai báo các thuộc tính của Khách hàng
    /// </summary>
    /// Created by NVTuan ngày 29/3/2019
    public class Customer
    {
        private Guid _customerID;
        private string _customerCode;
        private string _customerName;
        private string _companyName;
        private string _taxCode;
        private string _address;
        private string _phoneNumber;
        private string _email;
        private string _memberCardCode;
        private string _cardLevel;
        private string _amount;
        private string _note;
        private bool _fiveFoodMember;
        private bool _unfollow;
        public Guid CustomerID { get => _customerID; set => _customerID = value; }
        public string CustomerCode { get => _customerCode; set => _customerCode = value; }
        public string CustomerName { get => _customerName; set => _customerName = value; }
        public string CompanyName { get => _companyName; set => _companyName = value; }
        public string TaxCode { get => _taxCode; set => _taxCode = value; }
        public string Address { get => _address; set => _address = value; }
        public string PhoneNumber { get => _phoneNumber; set => _phoneNumber = value; }
        public string Email { get => _email; set => _email = value; }
        public string MemberCardCode { get => _memberCardCode; set => _memberCardCode = value; }
        public string CardLevel { get => _cardLevel; set => _cardLevel = value; }
        public string Amount { get => _amount; set => _amount = value; }
        public string Note { get => _note; set => _note = value; }
        public bool FiveFoodMember { get => _fiveFoodMember; set => _fiveFoodMember = value; }
        public bool Unfollow { get => _unfollow; set => _unfollow = value; }

        /// <summary>
        /// Hàm khởi tạo
        /// </summary>
        /// Created by NVTuan ngày 29/3/2019
        public Customer() { }

        public static List<Customer> customers = new List<Customer>()
        {
            new Customer{CustomerID=Guid.NewGuid(),CustomerCode="KH0001", CustomerName="Nguyễn Văn Tuấn", CompanyName="Công ty cổ phần MISA", TaxCode="999999999", Address="Duy Tân, Cầu giấy, Hà Nội", PhoneNumber="0974791898", Email="nvtuan1404@gmail.com", MemberCardCode="8888888", CardLevel="VIP", Amount="500000", FiveFoodMember=true, Unfollow=false},
            new Customer{CustomerID=Guid.NewGuid(),CustomerCode="KH0002", CustomerName="Nguyễn Văn Tâm", CompanyName="Công ty cổ phần FPT", TaxCode="888888899", Address="Duy Tân, Cầu giấy, Hà Nội", PhoneNumber="0974791899", Email="nvtam1405@gmail.com", MemberCardCode="4554454", CardLevel="VIP", Amount="600000", FiveFoodMember=false, Unfollow=true},
            new Customer{CustomerID=Guid.NewGuid(),CustomerCode="KH0003", CustomerName="Nguyễn Thị Tuyết", CompanyName="Công ty cổ phần Viettel", TaxCode="677777775", Address="Duy Tân, Cầu giấy, Hà Nội", PhoneNumber="0974791878", Email="nttuyet1464@gmail.com", MemberCardCode="3223232", CardLevel="VIP", Amount="700000", FiveFoodMember=true, Unfollow=false},
            new Customer{CustomerID=Guid.NewGuid(),CustomerCode="KH0004", CustomerName="Nguyễn Văn Nam", CompanyName="Công ty cổ phần VNG", TaxCode="8854444444", Address="Duy Tân, Cầu giấy, Hà Nội", PhoneNumber="0974795898", Email="nvnam1434@gmail.com", MemberCardCode="54455445", CardLevel="VIP", Amount="800000", FiveFoodMember=false, Unfollow=false},
            new Customer{CustomerID=Guid.NewGuid(),CustomerCode="KH0005", CustomerName="Trần Văn Hà", CompanyName="Công ty cổ phần Vinamilk", TaxCode="44333354455", Address="Duy Tân, Cầu giấy, Hà Nội", PhoneNumber="09747691898", Email="tvha1424@gmail.com", MemberCardCode="9889987", CardLevel="VIP", Amount="900000", FiveFoodMember=true, Unfollow=true},
            new Customer{CustomerID=Guid.NewGuid(),CustomerCode="KH0006", CustomerName="Lưu Văn Phúc", CompanyName="Công ty cổ phần Vinaphone", TaxCode="355455454", Address="Duy Tân, Cầu giấy, Hà Nội", PhoneNumber="0974798898", Email="lvphuc4404@gmail.com", MemberCardCode="54556567", CardLevel="VIP", Amount="1000000", FiveFoodMember=false, Unfollow=true},
            new Customer{CustomerID=Guid.NewGuid(),CustomerCode="KH0007", CustomerName="Nguyễn Ngọc Anh", CompanyName="Công ty cổ phần Mobiphone", TaxCode="54544666776", Address="Duy Tân, Cầu giấy, Hà Nội", PhoneNumber="0974795898", Email="nnanh5404@gmail.com", MemberCardCode="67868574", CardLevel="VIP", Amount="1100000", FiveFoodMember=true, Unfollow=true},
            new Customer{CustomerID=Guid.NewGuid(),CustomerCode="KH0008", CustomerName="Vũ Văn Kiệt", CompanyName="Công ty cổ phần BSC", TaxCode="2322323242", Address="Duy Tân, Cầu giấy, Hà Nội", PhoneNumber="0974741898", Email="vvkiet1604@gmail.com", MemberCardCode="36456567", CardLevel="VIP", Amount="1200000", FiveFoodMember=true, Unfollow=false},
            new Customer{CustomerID=Guid.NewGuid(),CustomerCode="KH0009", CustomerName="Phùng Văn Dương", CompanyName="Công ty cổ phần BIDV", TaxCode="98978787677", Address="Duy Tân, Cầu giấy, Hà Nội", PhoneNumber="0976791898", Email="pvduong1434@gmail.com", MemberCardCode="567574654", CardLevel="VIP", Amount="13400000", FiveFoodMember=false, Unfollow=true},
            new Customer{CustomerID=Guid.NewGuid(),CustomerCode="KH0010", CustomerName="Lê Văn Linh", CompanyName="Công ty cổ phần Vietcombank", TaxCode="3432443434", Address="Duy Tân, Cầu giấy, Hà Nội", PhoneNumber="0974791898", Email="lvlinh1504@gmail.com", MemberCardCode="475757554", CardLevel="VIP", Amount="5500000", FiveFoodMember=true, Unfollow=false},
        };
    }
}