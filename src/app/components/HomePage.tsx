import Main from "../../imports/Main-4/index";

export function HomePage() {
  return (
    <div className="flex-1 overflow-auto bg-[#fafafa] [&_[data-name='TopNavigation']]:hidden">
      <Main />
    </div>
  );
}
