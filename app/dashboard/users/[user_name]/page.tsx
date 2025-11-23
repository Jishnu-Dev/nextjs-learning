import Image from "next/image";

export default async function Page(
  props: PageProps<"/dashboard/users/[user_name]">
) {
  const { user_name } = await props.params;

  return (
    <section>
      <p className="text-4xl text-amber-500 capitalize">
        {user_name} IS PRETTYYY
      </p>
      <div className="relative w-160 h-112">
        <Image
          src="https://blogsofraghs.wordpress.com/wp-content/uploads/2008/11/surya.jpg"
          alt="This is an image of surya"
          fill
          className="object-contain"
        />
      </div>
      {/* <img
        src="https://blogsofraghs.wordpress.com/wp-content/uploads/2008/11/surya.jpg"
        width={600}
        height={600}
      /> */}
    </section>
  );
}
