/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Loginbg from '@/assets/images/login-bg.png';
import Logo from '@/assets/images/logo.png';
import { tenant } from '@/axios/actions/common';
import { TenantInterface } from '@/redux/slices/common/interface';

import './login.css';

function Login() {
  // use hooks
  const tenants = useLoaderData() as TenantInterface[];
  const [selectedTenant, setSelectedTenant] = useState<string>('');

  // handling login redirect
  const redirectLogin = () => {
    window.location.href = selectedTenant;
  };

  // handling tenant select
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const tenantObj = tenants?.find((item) => item?._id === value);
    setSelectedTenant(
      `${tenantObj?.loginUri}?response_type=${tenantObj?.responseType}&client_id=${
        tenantObj?.clientId
      }&redirect_uri=${import.meta.env.VITE_APP_REDIRECT_URI}&state=${tenantObj?.state}`
    );
  };

  console.log(tenants, 'tenants');
  return (
    <div className="login-wrapper d-flex w-100 flex-wrap min-vh-100">
      <div className="login-left d-inline-flex justify-content-end">
        <div className="login-container text-center">
          <div className="logo">
            <img src={Logo} />
          </div>
          <h5>Welcome to SalesBoost</h5>
          <h2>Update your pipeline in seconds</h2>
          <div className="selectbox">
            <select name="tenants" onChange={handleChange}>
              <option value={''}></option>
              {tenants?.map((item) => {
                return (
                  <option key={item?._id} value={item?._id}>
                    {item?.label}
                  </option>
                );
              })}
            </select>
          </div>
          <button type="button" onClick={redirectLogin}>
            Sign in
          </button>
          <hr className="separator" />
          <span className="icons-lock"></span>
          <p>Don’t worry! Your data is secure.</p>
        </div>
      </div>
      <div className="login-right w-100" style={{ backgroundImage: `url(${Loginbg})` }}>
        <div className="login-right-content">
          <h2>
            SalesBoost is flexible and powerful, it works wonders to optimize your sales
            opportunities. You gain so much clarity and time, everyday.
          </h2>
          <h6>
            Wade Warren <span>Founder @abcxyz</span>
          </h6>
        </div>
      </div>
    </div>
  );
}

export const fetchTenant = async () => {
  return await tenant({ method: 'GET' })?.then((resp) => resp?.data?.data);
};

export default Login;
