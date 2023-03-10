import React from 'react'
import "./styles.modules.css"


function SearchBar() {
  return (
    <div className="search-bar">
        <div className="left">
            <div className="filter-button">
              <svg width="20" height="20" style={{color:'inherit'}} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99998 3.47825C6.29971 3.47825 3.81303 3.00995 2.56837 2.6087C3.81303 2.20745 6.29975 1.73915 10 1.73915C13.7003 1.73915 16.187 2.20745 17.4316 2.6087C16.187 3.00995 13.7003 3.47825 9.99998 3.47825ZM16.3627 9.56523H14.5756L15.961 7.82609H17.2718L16.3627 9.56523ZM9.99998 0C5.18378 0 0 0.81648 0 2.60869C0 3.00713 0.32144 3.29221 0.71906 3.65832C2.47325 5.27363 6.62199 11.0687 6.62199 11.0687C7.04191 11.5952 7.27274 12.2503 7.27274 12.9131V18.6956C7.27274 19.592 8.68611 20 10 20C11.3139 20 12.7273 19.592 12.7273 18.6956V12.9131C12.7273 12.3439 12.9064 11.7856 13.2205 11.3043H16.3627C17.0552 11.3043 17.6784 10.9362 17.9892 10.3431L18.8983 8.60351C19.1824 8.06005 19.1521 7.4278 18.8184 6.91153C18.4968 6.41417 17.947 6.1169 17.3398 6.09525C17.3398 6.09525 18.7041 4.18956 19.2809 3.65836C19.6785 3.29221 20 3.00712 20 2.60869C20 0.81648 14.8162 0 9.99997 0H9.99998Z" fill="currentColor" style={{color:'inherit'}}/>
              </svg>
              <p style={{fontSize:"12px"}}>Filter</p>
              <svg width="14" height="14" style={{color:'inherit'}} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path  d="M1.67043 4.67522L6.80251 9.52659C7.01149 9.72474 7.32937 9.72474 7.53835 9.52659L12.6704 4.67522" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style={{color:'inherit'}}/>
              </svg>

            </div>
            <div className="sort-button">
            
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{color:'inherit'}} xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.273 8.636a.455.455 0 0 1-.455.455h-.454a.454.454 0 0 0-.455.454v1.819a.455.455 0 0 1-.91 0V9.545a.454.454 0 0 0-.454-.454h-.454a.455.455 0 0 1-.455-.455V6.818c0-.25.204-.454.455-.454h.454A.454.454 0 0 0 15 5.909V3.182a.455.455 0 0 1 .91 0v2.727c0 .251.202.455.454.455h.454c.251 0 .455.203.455.454v1.818Zm-1.819 8.637a1.82 1.82 0 0 1-1.818-1.819 1.82 1.82 0 0 1 1.819-1.818 1.82 1.82 0 0 1 1.818 1.819 1.82 1.82 0 0 1-1.819 1.818Zm-3.636-7.728a.455.455 0 0 1-.454.455h-.455a.454.454 0 0 0-.455.455v.909a.455.455 0 0 1-.909 0v-.91A.454.454 0 0 0 9.091 10h-.455a.455.455 0 0 1-.454-.455V7.727c0-.25.203-.454.454-.454h.455a.454.454 0 0 0 .454-.455V3.182a.455.455 0 0 1 .91 0v3.636c0 .251.203.455.454.455h.455c.25 0 .454.203.454.454v1.818ZM10 17.273a1.82 1.82 0 0 1-1.818-1.819A1.82 1.82 0 0 1 10 13.636a1.82 1.82 0 0 1 1.818 1.819A1.82 1.82 0 0 1 10 17.273ZM6.364 6.818a.455.455 0 0 1-.455.455h-.454A.454.454 0 0 0 5 7.727v3.637a.455.455 0 0 1-.91 0V7.727a.454.454 0 0 0-.454-.454h-.454a.455.455 0 0 1-.455-.455V5c0-.25.204-.455.455-.455h.454a.454.454 0 0 0 .455-.454v-.91a.455.455 0 0 1 .909 0v.91c0 .251.203.454.455.454h.454c.25 0 .455.204.455.455v1.818ZM4.545 17.273a1.82 1.82 0 0 1-1.818-1.819 1.82 1.82 0 0 1 1.818-1.818 1.82 1.82 0 0 1 1.819 1.819 1.82 1.82 0 0 1-1.819 1.818ZM18.182 0H1.818A1.82 1.82 0 0 0 0 1.818v16.364A1.82 1.82 0 0 0 1.818 20h16.364A1.82 1.82 0 0 0 20 18.182V1.818A1.82 1.82 0 0 0 18.182 0Z" fill="currentColor" style={{color:'inherit'}} /></svg>

              <p style={{fontSize:"12px"}}>Sort</p>

              <svg width="14" height="14" style={{color:'inherit'}} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path  d="M1.67043 4.67522L6.80251 9.52659C7.01149 9.72474 7.32937 9.72474 7.53835 9.52659L12.6704 4.67522" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style={{color:'inherit'}}/>
              </svg>
            </div>          
        </div>
        <div className="right">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.917 14.167a6.257 6.257 0 0 1-6.25-6.25 6.257 6.257 0 0 1 6.25-6.25 6.257 6.257 0 0 1 6.25 6.25 6.257 6.257 0 0 1-6.25 6.25Zm11.96 4.533-5.809-5.81a7.876 7.876 0 0 0 1.765-4.973C15.833 3.55 12.282 0 7.917 0 3.55 0 0 3.551 0 7.917c0 4.365 3.551 7.916 7.917 7.916a7.876 7.876 0 0 0 4.973-1.765l5.81 5.81a.417.417 0 0 0 .589 0l.589-.59a.417.417 0 0 0 0-.588Z" fill="currentColor" style={{color:'inherit'}} /></svg>
            <input className="search" placeholder='Search' type="text" />
        </div>
    </div>
  )
}

export default SearchBar