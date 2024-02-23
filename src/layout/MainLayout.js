import Header from "./header/header";
import Footer from "./footer/footer";

export default function MainLayout(props) {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-t from-white via-blue-500 to-white-500">
      <Header />
      <main className="mb-auto text-white">{props.children}</main>
      <Footer />
    </div>
  );
}
