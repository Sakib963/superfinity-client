const SupportHub = () => {
  return (
    <div className="bg-[#030303]">
      <div className="w-3/4 h-full mx-auto py-20 space-y-10 ">
        <div className="space-y-4 ">
          <h3 className="text-3xl font-bold">
            FAQ |<span className="text-[#F0141E]"> Superfinity Support</span>
          </h3>
          <div className="line h-1"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* FAQ 1 */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 rounded-box text-black"
          >
            <div className="collapse-title text-xl bg-[#F0141E] text-white font-semibold">
              How can I place an order for Marvel action figures on Superfinity?
            </div>
            <div className="collapse-content">
              <p>
                To place an order, simply browse our collection, select the
                desired action figures, and proceed to checkout. Follow the
                prompts to provide your shipping information and payment
                details.
              </p>
            </div>
          </div>
          {/* FAQ 2 */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 rounded-box text-black"
          >
            <div className="collapse-title text-xl bg-[#F0141E] text-white font-semibold">
              What payment methods are accepted on Superfinity?
            </div>
            <div className="collapse-content">
              <p>
                We accept various payment methods, including credit cards (Visa,
                Mastercard, American Express), PayPal, and Google Pay. Choose
                your preferred option during the checkout process.
              </p>
            </div>
          </div>
          {/* FAQ 3 */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 rounded-box text-black"
          >
            <div className="collapse-title text-xl bg-[#F0141E] text-white font-semibold">
              What is the return policy for purchases made on Superfinity?
            </div>
            <div className="collapse-content">
              <p>
                We have a hassle-free return policy. If you&apos;re not
                satisfied with your purchase, you can initiate a return within
                30 days of delivery. Please refer to our Returns and Refunds
                page for detailed instructions.
              </p>
            </div>
          </div>
          {/* FAQ 4 */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 rounded-box text-black"
          >
            <div className="collapse-title text-xl bg-[#F0141E] text-white font-semibold">
              How can I track the status of my order?
            </div>
            <div className="collapse-content">
              <p>
                Once your order is processed and shipped, we&apos;ll provide you
                with a tracking number via email. You can use this tracking
                number to monitor the status of your shipment on our website or
                the respective courier&apos;s website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportHub;
