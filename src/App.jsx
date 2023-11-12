import { Theme } from "@radix-ui/themes";
import { Flex, Text, Button } from "@radix-ui/themes";
import { ThemeProvider } from "@/theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Theme
        accentColor="amber"
        appearance="inherit"
        grayColor="sand"
        radius="large"
        scaling="95%"
      >
        <Flex direction="column" gap="2">
          <Text className="font-mono">Hello from Radix Themes :)</Text>
          <Button>Let&apos;s go</Button>
        </Flex>
      </Theme>
    </ThemeProvider>
  );
}

export default App;
