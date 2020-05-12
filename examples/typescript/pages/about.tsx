const Page = () => {
  return (
    <div>
      <p>about</p>
      <p>{process.env.NEXT_PUBLIC_EXAMPLE_KEY}</p>
    </div>
  );
};
export default Page;
