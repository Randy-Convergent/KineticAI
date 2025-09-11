import Breakline from "@/common/component/element/Breakline";
import H1 from "@/common/component/element/H1";
import React from "react";

export default function TermsPage() {
  // Get the current date for the "Last Updated" field
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-center px-5 lg:px-10  w-full mt-20 overflow-hidden">
      <div className="w-full max-sm:mt-10 mt-10 lg:px-36 z-[9] flex-col items-center flex justify-center ">
        <div className="w-full md:mt-16 mt-5 flex flex-col justify-start items-start">
          <H1
            className=" !justify-start !text-5xl text-start "
            title="Terms & Conditions"
            textColor="normal"
          />
          <H1
            className="md:mt-5 mt-10 w-full !justify-start !text-xl text-start "
            title={`Last Updated: ${currentDate}`}
            textColor="normal"
          />
        </div>
        <div className="w-full py-10">
          <Breakline />
        </div>
        <div className="py-5 w-full">
          <p className="py-2 text-lg text-[#1d1d1db7]">
            Please read these Terms and Conditions ("Terms") carefully before
            using the services offered by Kinetic ("the Agency," "we," "us," or
            "our"). This agreement sets forth the legally binding terms and
            conditions for your use of our AI automation services. By engaging
            our services, you agree to be bound by these Terms.
          </p>
        </div>

        <div className="py-5 w-full">
          <h1 className="text-3xl font-semibold">1. Definitions</h1>
          <p className="py-2 text-lg text-[#1d1d1db7]">
            <strong>1.1 "Services":</strong> Refers to the AI automation
            strategy, development, implementation, and support services provided
            by Kinetic as detailed in a specific Project Proposal or Statement
            of Work.
          </p>
          <p className="py-2 text-lg text-[#1d1d1db7]">
            <strong>1.2 "Client":</strong> Refers to the individual, company, or
            entity engaging the services of Kinetic.
          </p>
          <p className="py-2 text-lg text-[#1d1d1db7]">
            <strong>1.3 "Project Proposal":</strong> A formal document outlining
            the scope, timeline, deliverables, and costs for the Services to be
            provided for a specific project.
          </p>
        </div>

        <div className="py-5 w-full">
          <h1 className="text-3xl font-semibold">2. Scope of Services</h1>
          <p className="py-2 text-lg text-[#1d1d1db7]">
            The scope of work shall be limited to the services detailed in the
            Project Proposal signed by both the Client and the Agency. Any
            changes or additions to the scope of work must be agreed upon in
            writing by both parties, and may incur additional fees. The Agency
            is not responsible for tasks or deliverables not explicitly included
            in the agreed-upon proposal.
          </p>
        </div>

        <div className="py-5 w-full">
          <h1 className="text-3xl font-semibold">3. Client Responsibilities</h1>
          <p className="py-2 text-lg text-[#1d1d1db7]">
            The Client agrees to provide the Agency with timely access to
            necessary personnel, data, software systems, and other resources
            required for the successful completion of the project. The Client is
            responsible for the accuracy and completeness of all materials
            provided to the Agency.
          </p>
        </div>

        <div className="py-5 w-full">
          <h1 className="text-3xl font-semibold">4. Fees and Payment</h1>
          <p className="py-2 text-lg text-[#1d1d1db7]">
            Payment terms, including fees, invoicing schedules, and payment
            methods, will be specified in the Project Proposal. Invoices are due
            upon receipt unless otherwise stated. Late payments may be subject
            to interest charges as permitted by law.
          </p>
        </div>

        <div className="py-5 w-full">
          <h1 className="text-3xl font-semibold">5. Intellectual Property</h1>
          <p className="py-2 text-lg text-[#1d1d1db7]">
            Upon full and final payment, the Client shall own the intellectual
            property rights to the final, custom-developed solution
            ("Deliverables"). The Agency retains the right to use its
            pre-existing tools, know-how, and general methodologies in the
            course of its business.
          </p>
        </div>

        <div className="py-5 w-full">
          <h1 className="text-3xl font-semibold">6. Confidentiality</h1>
          <p className="py-2 text-lg text-[#1d1d1db7]">
            Both parties agree to maintain the confidentiality of any
            proprietary or sensitive information disclosed during the course of
            the project. This obligation extends beyond the termination of the
            agreement.
          </p>
        </div>

        <div className="py-5 w-full">
          <h1 className="text-3xl font-semibold">7. Limitation of Liability</h1>
          <p className="py-2 text-lg text-[#1d1d1db7]">
            In no event shall Kinetic be liable for any lost profits, data loss,
            or any indirect, special, incidental, or consequential damages
            arising out of or in connection with our Services, even if advised
            of the possibility of such damages. Our total liability shall not
            exceed the total fees paid by the Client for the specific project in
            question.
          </p>
        </div>
      </div>
    </div>
  );
}
