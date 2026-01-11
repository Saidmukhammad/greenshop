import BillingAddressForm from "./BillingAddressForm";

const AccountAddress = () => {
  return (
    <div>
      <BillingAddressForm />

      <div className="mt-14 border-t pt-6 flex justify-between items-center">
        <div>
          <h3 className="text-[16px] font-bold">Shipping Address</h3>
          <p className="text-sm text-[#727272]">
            You have not set up this type of address yet.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-[#46A358]">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" />
            Same as billing address
          </label>
          <button className="font-medium">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AccountAddress;
