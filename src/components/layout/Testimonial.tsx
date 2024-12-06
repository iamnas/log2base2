export function Testimonial() {
  return (
    <div className="py-12 px-6">
      <div className="text-center mb-16">
        <p className="text-lg">
          TRUSTED BY{" "}
          <span className="text-purple-600 font-bold">700,000+</span>{" "}
          LEARNERS ALL OVER THE WORLD
        </p>
      </div>
      <div className="items-center justify-items-center mb-16">
      <object data="https://assets.log2base2.com/Assets/homePage/CollegeCompaniesLogoNew.svg" className="sc-cqPOvA bpUvmC">Company Logo</object>
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 md:h-12" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" alt="Samsung" className="h-6 md:h-8" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6 md:h-8" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-6 md:h-8" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg" alt="PayPal" className="h-6 md:h-8" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/92/UPenn_shield_with_banner.svg" alt="UPenn" className="h-12 md:h-16" />
        <img src="https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg" alt="Harvard" className="h-12 md:h-16" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Arizona_State_University_logo.svg" alt="ASU" className="h-10 md:h-12" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/00/Florida_International_University_logo.svg" alt="FIU" className="h-10 md:h-12" />
        <img src="https://upload.wikimedia.org/wikipedia/en/1/1c/IIT_Bombay_Logo.svg" alt="IIT Bombay" className="h-12 md:h-16" /> */}
      </div>

      <div className="mt-8 md:mt-16 max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-sm border">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80"
            alt="Testimonial"
            className="w-16 h-16 rounded-full mx-auto sm:mx-0"
          />
          <div>
            <p className="text-base sm:text-lg mb-4 text-center sm:text-left">
              "Log2Base2 is a brilliant platform to visually learn -{" "}
              <span className="font-semibold">
                programming - data structures - algorithms
              </span>
              . Amazing, simple to understand animations they have created make
              understanding complicated programming constructs way easier."
            </p>
            <p className="font-semibold text-center sm:text-left">- Shravan Venkataraman</p>
          </div>
        </div>
      </div>
    </div>
  );
}