import TextInput from "./Inputs/TextInput";
import SelectInput from "./Inputs/SelectInput";
import PhoneInput from "./Inputs/PhoneInput";

const BillingAddressForm = () => {
  return (
    <>
      <h2 className="text-[17px] font-medium mb-2">Billing Address</h2>
      <p className="text-sm text-[#727272] mb-6">
        The following addresses will be used on the checkout page by default.
      </p>

      <form className="space-y-6 max-w-[700px]">
        <div className="grid grid-cols-2 gap-4">
          <TextInput label="First Name" required />
          <TextInput label="Last Name" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SelectInput label="Country / Region" required>
            <option>Select a country / region</option>
          </SelectInput>
          <TextInput label="Town / City" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="Street Address"
            required
            placeholder="House number and street name"
          />
          <TextInput placeholder="Apartment, suite, unit, etc. (optional)" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SelectInput label="State" required>
            <option>Select a state</option>
          </SelectInput>
          <TextInput label="Zip" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <TextInput label="Email address" required />
          <PhoneInput label="Phone Number" required />
        </div>

        <button
          type="submit"
          className="mt-4 px-8 py-2 bg-[#46A358] text-white text-sm rounded-[3px]
          hover:bg-green-700 transition"
        >
          Save Address
        </button>
      </form>
    </>
  );
};

export default BillingAddressForm;
