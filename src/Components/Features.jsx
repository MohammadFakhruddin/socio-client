const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-20 ">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">Platform Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Feature 1 */}
        <div className="bg-base-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3 text-primary">Create & Manage Events</h3>
          <p>
            Logged-in users can create meaningful social service events like road cleanups and tree plantations with full control to update or manage their events.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-primary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3 text-secondary">Join Events & Track Participation</h3>
          <p className="text-gray-50">
            Join local community events with a single click and easily track all your joined events in one place.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-base-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3 text-primary">Secure Authentication</h3>
          <p className="">
            Sign up and log in securely with email/password and Google authentication, ensuring your account and data remain protected.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-primary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3 text-secondary">Upcoming Events Feed</h3>
          <p className="text-gray-50">
            Browse a continuously updated list of upcoming social development events happening near you — never miss out on opportunities to contribute.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-base-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3 text-primary">Responsive & User Friendly</h3>
          <p>
            Fully responsive design that looks great on mobile, tablet, and desktop to make participation effortless wherever you are.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-primary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3 text-secondary">Future-proof & Secure</h3>
          <p className="text-gray-50">
            Firebase and MongoDB credentials are secured with environment variables and routes are protected for seamless and secure user experience.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;
