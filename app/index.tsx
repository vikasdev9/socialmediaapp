import { Redirect } from "expo-router";

// export default function Index() {
//   return <Redirect href="/(tabs)" />;
// }

export default function Index() {
  return <Redirect href="/(auth)/login" />;
}