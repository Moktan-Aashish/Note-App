import AppScreen from "../../components/AppScreen";

export default function NotFoundPage() {
  return (
    <AppScreen className="flex justify-center items-center">
      <img
        src="src\assets\images\PageNotFound.svg"
        alt="Page Not Found"
        className="max-w-3xl"
      />
    </AppScreen>
  );
}
