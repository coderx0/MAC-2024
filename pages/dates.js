import React from "react";
import Link from "next/link";
import SponsorFix from "../components/SponsorFix";

const Dates = () => {
  return (
    <div className="mt-14 py-8 bg-slate-200 text-black">
      <h1 className="text-center text-3xl font-bold mb-6">
        <span className="md:px-8 border-b-4 border-blue-500 pb-4">
          Important Dates
        </span>
      </h1>
      <div class="flex justify-center">
        <div class="flex flex-col w-full items-center justify-center">
          <div class="w-full text-sm md:text-lg mb-4 mt-8 flex flex-col items-center font-bold italic">
            <p class="md:mb-8 w-2/3 leading-relaxed font-semibold text-lg self-center text-left mt-4">
              Papers are accepted in multiple stages.
            </p>

            <table class="text-[12px] md:text-lg lg:text-lg w-2/3">
              <tbody colspan="3" rowspan="4">
                <tr>
                  <td class="text-center px-4 border border-black w-2/3 md: w-64">
                    Category
                  </td>
                  <td class="text-center px-4 border border-black">
                    Paper Submission Deadline
                  </td>
                  <td class="text-center px-4 border border-black w-2/3 md: w-64">
                    Acceptance Notification
                  </td>
                </tr>
                <tr class="">
                  <td class="text-center py-2 border border-black w-2/3 md: w-64">
                    Early Bird*
                  </td>
                  <td class="text-center py-2 text-red-500 border border-black">
                    <s>April 30, 2024</s>
                  </td>
                  <td class="text-center py-2 border border-black w-2/3 md: w-64">
                    <s>May 15, 2024</s>
                  </td>
                </tr>
                <tr class="">
                  <td class="text-center py-2 border border-black w-2/3 md: w-64">
                    B.Tech/M.Tech Students*
                  </td>
                  <td class="text-center py-2 border border-black">
                    <s>May 30, 2024</s>
                  </td>
                  <td class="text-center py-2 border border-black w-2/3 md: w-64">
                    <s>June 15, 2024</s>
                  </td>
                </tr>
                <tr class="">
                  <td class="text-center py-2 border border-black w-2/3 md: w-64">
                    Regular Paper
                  </td>
                  <td class="text-center py-2 border border-black">
                    {/* <s>July 31, 2024</s> */}

                    <span>August 18,2024</span>
                  </td>
                  <td class="text-center py-2 border border-black w-2/3 md: w-64">
                    {/* <s>August 15, 2024</s> */}

                    <span>September 02,2024</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="w-full flex justify-center items-center font-bold italic">
            <table class="w-2/3 border border-black">
              <tbody>
                <tr class=" border border-black" colSpan={3}>
                  <td colSpan={2} class=" border border-black w-2/3 md: w-64">
                    <div class="text-left px-4">
                      Camera Ready Paper Submission Deadline
                    </div>
                  </td>
                  <td class="text-center py-2 border border-black border border-black w-2/3 md: w-64">
                    September 15, 2024
                  </td>
                </tr>
                <tr class=" border border-black" colSpan={3}>
                  <td colSpan={2} class=" border border-black w-2/3 md: w-64">
                    <div class="text-left px-4">Registration Deadline</div>
                  </td>
                  <td class="text-center py-2 border border-black border border-black w-2/3 md: w-64">
                    October 4, 2024
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p class="md:mb-8 leading-relaxed font-semibold text-lg text-center mt-4">
        *10% of Registration fee will be reimbursed (applicable to only
        B.Tech./M.Tech. Students who have registered as first author).
      </p>

      {/*
<div className='text-center'>
<div className='mt-24 px-4 md:px-0'>
    <p className='text-[15px] font-semibold md:text-[22px] lg:text-xl'>For Regular Registrations <span className='text-red-500 font-bold'>( After 31 January, 2023, 11 PM-IST)</span></p>
</div>
<div className='flex justify-center mt-4 '>
<div className=' p-1 md:p-4 border-2 border-stone-400 overflow-x-scroll'>
<table className='text-left text-[12px] md:text-lg lg:text-lg w-[39rem] md:w-[59rem] lg:w-[67rem]'>
<tbody>
<tr className='h-12'>
        <th></th>
        <th className=' text-[13px] sm:text-[15px] md:text-xl p-1 pb-2'>Category</th>
        <th className=' text-[13px] sm:text-[15px] md:text-xl p-1 pb-2'>Indian Delegates</th>
        <th className=' text-[13px] sm:text-[15px] md:text-xl p-1 pb-2'>Foreign Delegates</th>
    </tr>
    <tr className='border-b-2 border-stone-600'>
    <td className='w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400' rowSpan={5}>
    Early Paper Submission Advantage (For Paper Submitted Till <span className='text-red-500 font-bold'>31 October, 2022</span>) </td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2 '>Student (IEEE)</td>
        <td className='py-2'>INR 3900 + 18% = 4602/-</td>
        <td className='py-2'>USD 140 + 18% = 166</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2'>Student (Non-IEEE)</td>
        <td className='py-2'>INR 4900 + 18% = 5782/-</td>
        <td className='py-2'>USD 190 + 18% = 225</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2'>Faculty</td>
        <td className='py-2'>INR 7900 + 18% = 9322/-</td>
        <td className='py-2'>USD 200 + 18% = 236</td>
    </tr>
    <tr className='border-b-4 border-stone-600'>
        <td className='py-2'>Industry</td>
        <td className='py-2'>INR 10900 + 18% = 12862/-</td>
        <td className='py-2'>USD 250 + 18% = 295</td>
    </tr>
    <tr>
        <td rowSpan={5} className='font-semibold'>Regular</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2'>Student (IEEE)</td>
        <td className='py-2'>INR 4900 + 18% = 5782/-</td>
        <td className='py-2'>USD 160 + 18% = 189</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2'>Student (Non-IEEE)</td>
        <td className='py-2'>INR 5900 + 18% = 6962/-</td>
        <td className='py-2'>USD 210 + 18% = 248</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2'>Faculty</td>
        <td className='py-2'>INR 9900 + 18% = 11682/-</td>
        <td className='py-2'>USD 220 + 18% = 260</td>
    </tr>
    <tr >
        <td className='py-2'>Industry</td>
        <td className='py-2'>INR 12900 + 18% = 15222/-</td>
        <td className='py-2'>USD 290 + 18% = 343</td>
    </tr>
</tbody>
</table>
</div>
</div>
</div>

<h1 className='text-center text-3xl font-bold mt-12 mb-8' >
    <span className='border-b-4 border-blue-500 px-4 pb-4'>
    Bank Details
    </span>
</h1>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
<img src="/soon.webp" alt="Coming Soon" />
</div>

<div className='flex justify-center'>
<div className='md:mx-28 bg-red-100 max-w-[700px] w-[90%] md:w-[70%] lg:w-[50%] text-sm md:text-lg p-4 mt-8 flex flex-col items-center border-2 border-stone-400 rounded-2xl'>
<div className='w-full flex justify-between  py-2'>
    <span>Beneficiary Name</span>
    <span className='text-right'>NON FORMAL CONTINUING OF EDU</span>
</div>
<div className='w-full flex justify-between  py-2'>
    <span>Account Number</span>
    <span className='text-right'>10424975574</span>
</div>
<div className='w-full flex justify-between  py-2'>
    <span>IFSC Code</span>
    <span className='text-right'>SBIN0002580</span>
</div>
<div className='w-full flex justify-between  py-2'>
    <span>Swift Code</span>
    <span className='text-right'>SBININBB828</span>
</div>
<div className='w-full flex justify-between  py-2'>
    <span>Bank</span>
    <span className='text-right'>State Bank of India</span>
</div>
<div className='w-full flex justify-between  py-2'>
    <span>Branch</span>
    <span className='text-right'>MNNIT, Allahabad</span>
</div>
<div className='w-full flex justify-between  py-2'>
    <span>Institute Name</span>
    <span className='text-right'>Motilal Nehru National Institute of Technology, Allahabad</span>
</div>
<div className='w-full flex justify-between  py-2'>
    <span>GSTN</span>
    <span className='text-right'>09AAAJM1116B2ZR</span>
</div>

</div>
</div>
*/}
      {/*
<div className='text-center mt-12 '>
    <Link href="/tuned" ><span className=' rounded-xl cursor-pointer font-semibold text-lg border-2 px-8 border-stone-100 btn btn-success'>Registration Form</span></Link>
</div>

<div className='h-12 w-full'>

</div>
*/}
      <SponsorFix />
    </div>
  );
};

export default Dates;
