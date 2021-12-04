import React from 'react';

const Form = () => {
    return (
        <div className="mb-3">
            <div className="d-flex">
                <div class="input-group mb-3 me-3">
                    {/* <span class="input-group-text" id="basic-addon1">@</span> */}
                    <input type="text" class="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" required />
                    {/* <span class ="input-group-text" id="basic-addon2">@example.com</span> */}
                </div>
            </div>

            <div class="input-group mb-3">
                <div class="input-group">
                    {/* <span class="input-group-text">With textarea</span> */}
                    <textarea class="form-control" rows="10" placeholder="Your Message" aria-label="With textarea"></textarea>
                </div>
            </div>
            <button className="btn btn-primary">Send Message</button>
        </div>
    );
};

export default Form;