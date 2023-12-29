import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <Switch
      defaultSelected
      size='lg'
      color='warning'
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <SunIcon /> : <MoonIcon />
      }
      checked={theme === "light"}
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    ></Switch>
  );
}
// import React from "react";
// import { Switch, VisuallyHidden, useSwitch } from "@nextui-org/react";
// import { MoonIcon } from "./MoonIcon";
// import { SunIcon } from "./SunIcon";
// import { useTheme } from "next-themes";
// const ThemeSwitch = (props) => {
//   const {
//     Component,
//     slots,
//     isSelected,
//     getBaseProps,
//     getInputProps,
//     getWrapperProps,
//   } = useSwitch(props);
//   const { theme, setTheme } = useTheme();
//   return (
//     <div className='flex flex-col gap-2'>
//       <Component {...getBaseProps()}>
//         <VisuallyHidden>
//           <input {...getInputProps()} />
//         </VisuallyHidden>
//         <div
//           {...getWrapperProps()}
//           defaultSelected
//           size='lg'
//           color='default'
//           thumbIcon={({ isSelected, className }) =>
//             isSelected ? <SunIcon /> : <MoonIcon />
//           }
//           checked={theme === "light"}
//           onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
//         >
//           {isSelected ? <SunIcon /> : <MoonIcon />}
//         </div>
//       </Component>
//     </div>
//   );
// };
// export default ThemeSwitch;
