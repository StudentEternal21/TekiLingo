import { Stack } from "expo-router";

export default function CourseLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="[courseId]/index" />
      <Stack.Screen name="[courseId]/lesson/[lessonId]" />
    </Stack>
  );
}