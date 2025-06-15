import React from "react";

const Faq = () => {
  return (
    <div className="w-10/12 mx-auto my-20">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">
        Know Before You Share
      </h2>
      <p className="text-center font-medium text-gray-500 mb-12">
        "Have questions about how our food sharing community works? Find answers
        to the most common questions here. Learn how to donate, request, and
        safely share food with others. Together, we’re reducing waste and
        helping those in need. Check our guidelines and tips to get started
        today!"
      </p>
      <div className="flex w-full flex-col lg:flex-row gap-6">
        <div className="card rounded-box w-2/3 grid grow place-items-center">
          <img
            className="rounded-lg h-full object-cover"
            src="https://i.ibb.co/DPZjjj9P/istockphoto-1201642586-612x612.jpg"
            alt="FAQ Illustration"
          />
        </div>
        <div className="card rounded-box grid grow gap-4">
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title font-semibold">
              <p className="text-md font-bold italic text-teal-700">
                What is food sharing?
              </p>
            </div>
            <div className="collapse-content text-sm">
              <p className="font-semibold text-gray-500">
                Food sharing is the practice of donating or exchanging surplus,
                leftover, or extra food with people in your community to reduce
                waste and help those in need.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title font-semibold">
              <p className="text-md font-bold italic text-teal-700">
                Why is food sharing important?
              </p>
            </div>
            <div className="collapse-content text-sm">
              <p className="font-semibold text-gray-500">
                It helps reduce food waste, saves resources, and supports people
                who may be facing food insecurity — creating a stronger, more
                caring community.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title font-semibold">
              <p className="text-md font-bold italic text-teal-700">
                Who can participate in food sharing?
              </p>
            </div>
            <div className="collapse-content text-sm">
              <p className="font-semibold text-gray-500">
                Anyone can join! Whether you're a home cook, restaurant owner,
                shopkeeper, or simply someone with extra food — you can share
                with others safely.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              <p className="text-md font-bold italic text-teal-700">
                What types of food can I share?
              </p>
            </div>
            <div className="collapse-content text-sm">
              <p className="font-semibold text-gray-500">
                You can share packaged items, fresh fruits, vegetables, cooked
                meals (if properly stored), and bakery items — avoid sharing
                perishable or unsafe food.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              <p className="text-md font-bold italic text-teal-700">
                {" "}
                How do I request food from others?
              </p>
            </div>
            <div className="collapse-content text-sm">
              <p className="font-semibold text-gray-500">
                On our platform, browse available food items, choose what you
                need, and send a request to the donor with your details for
                pickup.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              <p className="text-md font-bold italic text-teal-700">
                Is there any cost involved?
              </p>
            </div>
            <div className="collapse-content text-sm">
              <p className="font-semibold text-gray-500">
                No, food sharing is completely free. It's about kindness,
                community care, and reducing food waste.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              <p className="text-md font-bold italic text-teal-700">
                How do I become a food donor?
              </p>
            </div>
            <div className="collapse-content text-sm">
              <p className="font-semibold text-gray-500">
                Simply sign up on our platform, add details of your available
                food items, and share them with people nearby.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              <p className="text-md font-bold italic text-teal-700">
                What happens if I can't pick up food after requesting it?
              </p>
            </div>
            <div className="collapse-content text-sm">
              <p className="font-semibold text-gray-500">
                If you can’t make it, please notify the donor as soon as
                possible, so the food can be offered to someone else in need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
