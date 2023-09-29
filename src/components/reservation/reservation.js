import React, { useState } from 'react';
import './reservation.css';
import '../default.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    area: '',  // Added a new field for the area
    adult: '', // Added a new field for the number of adults
    child: '', // Added a new field for the number of children
    message: ''
  });

  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    const isFormValid = Object.values(formData).every(val => val !== '');
    setFormValid(isFormValid);
  };

  return (
    <section id="revervation" className="revervation">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Thông Tin Đặt Bàn Online</h2>
          <p className='custom-font' style={{textAlign: 'center', fontSize: '22px'}}>Vui lòng đăng ký đặt bàn dùng bữa <span style={{color: '#ce1212'}}>trước 1 giờ</span></p>
        </div>

        <div className="flex">
          <div className="col reservation-img" style={{backgroundImage: 'url(/images/bookTb.jpg)'}} data-aos="zoom-out" data-aos-delay="200"></div>

          <div className="reservation-form-bg">
            <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="100">
              <div className="row">
                <div className="col ">
                  <div className='remind'>Họ Tên (*)</div>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Nhập Tên" required onChange={handleInputChange} />
                </div>
                <div className="col ">
                  <div className='remind'>Email (*)</div>
                  <input type="email" className="form-control" name="email" id="email" placeholder="Nhập Email" required onChange={handleInputChange} />
                </div>
                <div className="col ">
                  <div className='remind'>Số Điện Thoại (*)</div>
                  <input type="text" className="form-control" name="phone" id="phone" placeholder="Nhập SĐT" required onChange={handleInputChange} />
                </div>
              </div>
              <div className='flex between' style={{flexWrap: 'wrap'}}>
                <div className="col">
                  <div className='remind'>Chọn Chi Nhánh (*)</div>
                  <select name="area" id="area" required onChange={handleInputChange}>
                    <option value="CT">Nhà hàng Chí Tiên</option>
                    <option value="CT2">Nhà hàng Chí Tiên 2</option>
                    <option value="ST">Nhà hàng Sơn Trà</option>
                  </select>
                </div>
                <div className="col">
                  <div className='remind'>Ngày Đặt (*)</div>
                  <input type="date" name="date" className="date-picker" id="date"  required onChange={handleInputChange} lang="en"/>
                </div>
                <div className="col">
                  <div className='remind'>Giờ Đặt (*)</div>
                  <input type="time" className="time-picker" name="time" id="time"  required onChange={handleInputChange} />
                </div>
              </div>
              <div className='flex between'>
                <div className="col">
                  <div className='remind'>Số người lớn (*)</div>
                  <input type="number" className="form-control" name="adult" id="adult" placeholder="Số lượng người" required onChange={handleInputChange} />
                </div>
                <div className="col">
                  <div className='remind'>Số trẻ em (*)</div>
                  <input type="number" className="form-control" name="child" id="child" placeholder="Số lượng người" required onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-group">
                <textarea className="form-control textarea" name="message" rows="5" placeholder="Tin Nhắn" required onChange={handleInputChange}></textarea>
              </div>
              <div>
                <div className="error-message"></div>
                {formValid && <div className="sent-message">Bạn đã điền đầy đủ và đặt bàn thành công. Xin cảm ơn !!!</div>}
              </div>
              <div className="text-center"><button type="submit">Đặt Bàn</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
