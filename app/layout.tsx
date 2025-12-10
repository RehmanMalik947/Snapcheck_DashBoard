import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}



// import './globals.css'; // Tailwind CSS importcls


// export const metadata = {
//   title: 'Tailwind Test',
//   description: 'Testing Tailwind CSS',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
