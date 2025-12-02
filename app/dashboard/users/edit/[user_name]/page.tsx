type UserProps = {
  params: {
    user_name: string;
  };
};

export default function Page({ params }: UserProps) {
  const { user_name } = params;

  return (
    <section className="p-4 max-w-lg mx-auto mt-10 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-5 capitalize">
        User Info of {user_name}
      </h1>

      <div className="space-y-3">
        <p><strong>Name:</strong> <input type="text" className="border-2 border-pink-500 p-2 rounded" placeholder="Enter name"/></p>
        <p><strong>Age:</strong> <input type="number" className="border-2 border-pink-500 p-2 rounded" placeholder="Enter age"/></p>
        <p><strong>Phone:</strong> <input type="tel" className="border-2 border-pink-500 p-2 rounded" placeholder="Enter phone number"/></p>
        <p><strong>Favorite Color:</strong> <input type="text" className="border-2 border-pink-500 p-2 rounded" placeholder="Enter favorite color"/></p>
        <p><strong>Address:</strong> <input type="text" className="border-2 border-pink-500 p-2 rounded" placeholder="Enter address"/></p>
      </div>
    </section>
  );
}
