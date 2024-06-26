import React,{Component} from 'react';
import { PaySuccessComplete } from '../common/common';

class PaySuccessful extends Component {

    componentDidMount()
    {
        PaySuccessComplete();
        localStorage.removeItem("cartItemCount");
    }

  render(){
  return (
    <section id="quick-pay">
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 text-center">
                <div class="thankyou-wrap">
                    <h3>Thank You</h3>
                    <img src="~/Content/Images/success.png" alt="Success" />
                    <p>Your transaction has completed successfully.</p>
                    <a href="/" class="btn btn-info btn-lg margintop-20" type="button">Take Me Home</a>
                </div>
            </div>
        </div>
    </div>
</section>

  );
}
}

export default PaySuccessful;