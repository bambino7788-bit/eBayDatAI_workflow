import { useState } from 'react';
import { cn } from './ui/utils';
import NotebookIcon from '../../imports/Icon';

// Inlining SVG paths to avoid import errors
const svgPaths = {
  // Logo Paths
  p35c9d900: "M1.96325 0C-0.961291 0 0.24761 4.82234 0.24761 4.82234C0.24761 4.82234 0.92869 2.75078 3.67889 5.37877C5.76547 7.37262 7.89843 5.37877 7.38839 5.37877C6.04049 5.37877 3.9571 -1.35944e-07 1.96325 0Z",
  pf7da000: "M1.92271 0C-0.0617562 0 -0.0610216 1.92712 0.028818 2.74577C0.0399226 2.84696 0.198448 2.86912 0.259486 2.78765C0.601421 2.33128 1.50633 1.74369 3.51504 3.66313C5.60162 5.65698 7.72826 3.58312 7.22453 3.66313C4.1484 4.15169 3.91655 0 1.92271 0Z",
  p2a77a00: "M1.96325 0C-0.961292 0 0.24761 4.82234 0.24761 4.82234C0.24761 4.82234 0.92869 2.75078 3.67889 5.37877C5.76547 7.37262 7.89843 5.37877 7.38839 5.37877C6.0405 5.37877 3.9571 -1.35944e-07 1.96325 0Z",
  p28a3e780: "M1.92271 0C-0.59693 0 0.0837547 3.1067 0.0837547 3.1067C0.0837547 3.1067 0.764835 1.03514 3.51504 3.66313C5.60162 5.65698 7.72826 3.58312 7.22453 3.66313C4.1484 4.15169 3.91655 0 1.92271 0Z",
  p194c3e00: "M1.96325 0C-0.961292 0 0.247611 4.82234 0.247611 4.82234C0.247611 4.82234 0.92869 2.75078 3.67889 5.37877C5.76548 7.37262 7.89844 5.37877 7.38839 5.37877C6.0405 5.37877 3.9571 -1.35944e-07 1.96325 0Z",
  p3486d300: "M1.92271 0C-0.59693 0 0.0837547 3.1067 0.0837547 3.1067C0.0837547 3.1067 0.764835 1.03514 3.51504 3.66313C5.60162 5.65698 7.72827 3.58312 7.22453 3.66313C4.1484 4.15169 3.91655 0 1.92271 0Z",
  p2afc3d80: "M1.92271 0C-0.59693 0 0.0837547 3.1067 0.0837547 3.1067C0.0837547 3.1067 0.764834 1.03514 3.51504 3.66313C5.60162 5.65698 7.72826 3.58312 7.22453 3.66313C4.1484 4.15169 3.91655 0 1.92271 0Z",
  // Title Paths
  p35659a00: "M72.7488 10.4301V5.29289e-05H74.9328V10.4301H72.7488Z",
  p2812cb00: "M61.6917 10.4301L65.5697 5.29289e-05H67.7537L71.6597 10.4301H69.3497L68.4537 7.91005H64.7437L63.8477 10.4301H61.6917ZM66.6057 2.67405L65.4017 6.04805H67.7957L66.6057 2.67405Z",
  p28bd2080: "M60.1179 10.6121C58.3539 10.6121 57.4439 9.63205 57.4439 7.25205V4.42405H56.2539V2.89805H57.4439V1.23205L59.5579 0.0280533V2.89805H61.2379V4.42405H59.5579V6.98605C59.5579 8.05005 59.6839 8.87605 60.7479 8.87605C60.8879 8.87605 61.0419 8.84805 61.2239 8.82005V10.5281C60.8879 10.5981 60.4539 10.6121 60.1179 10.6121Z",
  p2f14a300: "M53.1907 5.72605V5.46005C53.1907 4.50805 52.6727 4.17205 51.8467 4.17205C51.0907 4.17205 50.4887 4.50805 50.4047 5.23605H48.4587C48.5847 3.83605 49.8307 2.68805 52.0007 2.68805C54.1567 2.68805 55.3327 3.52805 55.3327 5.82405V10.4301H53.3587V9.57605C52.8827 10.3041 52.0287 10.6121 50.9787 10.6121C49.5087 10.6121 48.2207 9.77205 48.2207 8.21805C48.2207 6.55205 49.9707 5.55805 53.1907 5.72605ZM53.2467 7.08405C51.4267 6.94405 50.3767 7.39205 50.3767 8.14805C50.3767 8.72205 50.8527 9.12805 51.5947 9.12805C52.5467 9.12805 53.2467 8.65205 53.2467 7.26605V7.08405Z",
  p32e7100: "M37.8992 10.4301V5.29289e-05H41.4412C45.2072 5.29289e-05 47.2372 2.18405 47.2372 5.20805C47.2372 8.23205 45.2072 10.4301 41.4272 10.4301H37.8992ZM41.5672 1.76405H40.0832V8.66605H41.5672C43.7512 8.66605 44.9412 7.16805 44.9412 5.20805C44.9412 3.23405 43.7512 1.76405 41.5672 1.76405Z",
  pe3af00: "M27.647 13.1601L28.809 10.2481L26.009 2.89805H28.319L29.957 7.78405L31.7631 2.89805H33.905L29.789 13.1601H27.647Z",
  p90e31e0: "M23.1809 5.72605V5.46005C23.1809 4.50805 22.6629 4.17205 21.8369 4.17205C21.0809 4.17205 20.4789 4.50805 20.3949 5.23605H18.4489C18.5749 3.83605 19.8209 2.68805 21.9909 2.68805C24.1469 2.68805 25.3229 3.52805 25.3229 5.82405V10.4301H23.3489V9.57605C22.8729 10.3041 22.0189 10.6121 20.9689 10.6121C19.4989 10.6121 18.2109 9.77205 18.2109 8.21805C18.2109 6.55205 19.9609 5.55805 23.1809 5.72605ZM23.2369 7.08405C21.4169 6.94405 20.3669 7.39205 20.3669 8.14805C20.3669 8.72205 20.8429 9.12805 21.5849 9.12805C22.5369 9.12805 23.2369 8.65205 23.2369 7.26605V7.08405Z",
  p2ca52480: "M9.24295 10.4301V5.29289e-05H13.303C15.319 5.29289e-05 16.607 1.31605 16.607 2.88405C16.607 3.79405 16.229 4.45205 15.641 4.88605C16.593 5.32005 17.307 6.14605 17.307 7.42005C17.307 9.21205 15.795 10.4301 13.597 10.4301H9.24295ZM11.427 4.28405H12.841C13.737 4.28405 14.339 3.73805 14.339 3.01005C14.339 2.28205 13.737 1.75005 12.855 1.75005H11.427V4.28405ZM11.427 8.68005H13.373C14.381 8.68005 15.039 8.12005 15.039 7.32205C15.039 6.51005 14.381 5.97805 13.345 5.97805H11.427V8.68005Z",
  p168f3400: "M3.92 10.6121C1.638 10.6121 3.8147e-06 8.94605 3.8147e-06 6.66405C3.8147e-06 4.39605 1.624 2.71605 3.92 2.71605C6.328 2.71605 7.91 4.55005 7.812 7.26605H2.114C2.254 8.27405 2.884 9.01605 3.92 9.01605C4.648 9.01605 5.194 8.80605 5.474 8.28805H7.672C7.084 9.75805 5.642 10.6121 3.92 10.6121ZM3.878 4.27005C2.912 4.27005 2.156 4.95605 2.1 5.89405H5.698C5.614 4.83005 4.872 4.27005 3.878 4.27005Z",
  // Icons Paths
  pff0fc00: "M6 2H2.66667C2.29848 2 2 2.29848 2 2.66667V7.33333C2 7.70152 2.29848 8 2.66667 8H6C6.36819 8 6.66667 7.70152 6.66667 7.33333V2.66667C6.66667 2.29848 6.36819 2 6 2Z",
  p1d76d410: "M13.3333 2H10C9.63181 2 9.33333 2.29848 9.33333 2.66667V4.66667C9.33333 5.03486 9.63181 5.33333 10 5.33333H13.3333C13.7015 5.33333 14 5.03486 14 4.66667V2.66667C14 2.29848 13.7015 2 13.3333 2Z",
  p2f091200: "M13.3333 8H10C9.63181 8 9.33333 8.29848 9.33333 8.66667V13.3333C9.33333 13.7015 9.63181 14 10 14H13.3333C13.7015 14 14 13.7015 14 13.3333V8.66667C14 8.29848 13.7015 8 13.3333 8Z",
  p39897300: "M6 10.6667H2.66667C2.29848 10.6667 2 10.9651 2 11.3333V13.3333C2 13.7015 2.29848 14 2.66667 14H6C6.36819 14 6.66667 13.7015 6.66667 13.3333V11.3333C6.66667 10.9651 6.36819 10.6667 6 10.6667Z",
  p2d4b280: "M2.66572 14.6615C3.40184 14.6615 3.99858 14.0647 3.99858 13.3286C3.99858 12.5925 3.40184 11.9957 2.66572 11.9957C1.9296 11.9957 1.33286 12.5925 1.33286 13.3286C1.33286 14.0647 1.9296 14.6615 2.66572 14.6615Z",
  p2e627100: "M9.99645 13.995V8.66359C9.99645 8.48684 9.92624 8.31733 9.80126 8.19235C9.67628 8.06737 9.50677 7.99716 9.33002 7.99716H6.6643C6.48755 7.99716 6.31804 8.06737 6.19306 8.19235C6.06808 8.31733 5.99787 8.48684 5.99787 8.66359V13.995",
  p34fdb600: "M1.99929 6.6643C1.99924 6.47042 2.0415 6.27886 2.1231 6.10298C2.20471 5.92711 2.32371 5.77115 2.47179 5.646L7.1368 1.64742C7.37737 1.4441 7.68218 1.33254 7.99716 1.33254C8.31214 1.33254 8.61695 1.4441 8.85752 1.64742L13.5225 5.646C13.6706 5.77115 13.7896 5.92711 13.8712 6.10298C13.9528 6.27886 13.9951 6.47042 13.995 6.6643V12.6622C13.995 13.0157 13.8546 13.3547 13.6046 13.6046C13.3547 13.8546 13.0157 13.995 12.6622 13.995H3.33215C2.97865 13.995 2.63964 13.8546 2.38968 13.6046C2.13972 13.3547 1.99929 13.0157 1.99929 12.6622V6.6643Z",
  pd5f2f00: "M1.99929 11.9957C1.82254 11.9957 1.65303 11.9255 1.52805 11.8005C1.40307 11.6756 1.33286 11.5061 1.33286 11.3293V2.66572C1.33286 2.48897 1.40307 2.31946 1.52805 2.19448C1.65303 2.0695 1.82254 1.99929 1.99929 1.99929H5.33144C6.03843 1.99929 6.71647 2.28014 7.21639 2.78006C7.71631 3.27998 7.99716 3.95802 7.99716 4.66501C7.99716 3.95802 8.27801 3.27998 8.77793 2.78006C9.27785 2.28014 9.95589 1.99929 10.6629 1.99929H13.995C14.1718 1.99929 14.3413 2.0695 14.4663 2.19448C14.5912 2.31946 14.6615 2.48897 14.6615 2.66572V11.3293C14.6615 11.5061 14.5912 11.6756 14.4663 11.8005C14.3413 11.9255 14.1718 11.9957 13.995 11.9957H9.99645C9.4662 11.9957 8.95768 12.2064 8.58274 12.5813C8.2078 12.9563 7.99716 13.4648 7.99716 13.995C7.99716 13.4648 7.78652 12.9563 7.41158 12.5813C7.03664 12.2064 6.52811 11.9957 5.99787 11.9957H1.99929Z",
  p8cf8380: "M10.6629 6.6643C10.6629 7.37129 10.382 8.04933 9.88211 8.54925C9.38219 9.04917 8.70415 9.33002 7.99716 9.33002C7.29017 9.33002 6.61213 9.04917 6.11221 8.54925C5.61229 8.04933 5.33144 7.37129 5.33144 6.6643",
  p35edb600: "M2.26586 3.64337C2.09283 3.87409 1.99929 4.1547 1.99929 4.44309V13.3286C1.99929 13.6821 2.13972 14.0211 2.38968 14.2711C2.63964 14.521 2.97865 14.6615 3.33215 14.6615H12.6622C13.0157 14.6615 13.3547 14.521 13.6046 14.2711C13.8546 14.0211 13.995 13.6821 13.995 13.3286V4.44309C13.995 4.1547 13.9015 3.87409 13.7285 3.64337L12.3956 1.866C12.2714 1.70047 12.1105 1.56611 11.9254 1.47357C11.7403 1.38104 11.5362 1.33286 11.3293 1.33286H4.66501C4.45809 1.33286 4.25401 1.38104 4.06894 1.47357C3.88386 1.56611 3.72287 1.70047 3.59872 1.866L2.26586 3.64337Z",
  p1d8ada00: "M7.33073 6.84423L4.66501 2.22587",
  p196b2a00: "M7.33073 9.15009L4.66501 13.7684",
  p32cc7300: "M11.3293 13.7684L10.6629 12.6155",
  p341b3600: "M11.3293 2.22587L10.6629 3.3788",
  p224a3a65: "M13.7684 11.3293L12.6155 10.6629",
  p2b2cc500: "M13.7684 4.66501L12.6155 5.33144",
  p22cb6080: "M2.22588 11.3293L3.3788 10.6629",
  p199c5580: "M2.22588 4.66501L3.3788 5.33144",
  p6135000: "M7.99716 9.33002C8.73328 9.33002 9.33002 8.73328 9.33002 7.99716C9.33002 7.26104 8.73328 6.6643 7.99716 6.6643C7.26104 6.6643 6.6643 7.26104 6.6643 7.99716C6.6643 8.73328 7.26104 9.33002 7.99716 9.33002Z",
  p65ed680: "M7.99716 13.3286C10.9416 13.3286 13.3286 10.9416 13.3286 7.99716C13.3286 5.05269 10.9416 2.66572 7.99716 2.66572C5.05269 2.66572 2.66572 5.05269 2.66572 7.99716C2.66572 10.9416 5.05269 13.3286 7.99716 13.3286Z",
  p307ff100: "M9.99645 8.66359C9.41985 8.49504 8.9134 8.14419 8.55296 7.66361C8.19253 7.18303 7.99752 6.5986 7.99716 5.99787C7.9968 6.5986 7.80179 7.18303 7.44136 7.66361C7.08092 8.14419 6.57447 8.49504 5.99787 8.66359",
  p93e5780: "M11.7278 4.3318C11.8812 4.06622 11.9714 3.76892 11.9915 3.46291C12.0115 3.15689 11.9609 2.85036 11.8436 2.56702C11.7262 2.28369 11.5453 2.03115 11.3147 1.82894C11.0841 1.62673 10.8101 1.48028 10.5139 1.4009C10.2177 1.32153 9.90717 1.31137 9.60639 1.3712C9.30561 1.43103 9.02262 1.55925 8.77933 1.74595C8.53603 1.93265 8.33894 2.17281 8.20331 2.44786C8.06768 2.72292 7.99715 3.02548 7.99716 3.33216C7.99717 3.02548 7.92664 2.72292 7.79101 2.44786C7.65538 2.17281 7.45829 1.93265 7.21499 1.74595C6.97169 1.55925 6.68871 1.43103 6.38793 1.3712C6.08715 1.31137 5.77663 1.32153 5.48041 1.4009C5.18418 1.48028 4.91019 1.62673 4.67962 1.82894C4.44906 2.03115 4.2681 2.28369 4.15075 2.56702C4.03339 2.85036 3.9828 3.15689 4.00287 3.46291C4.02293 3.76892 4.11313 4.06622 4.26648 4.3318",
  p33dd0700: "M11.9937 3.41545C12.3855 3.51618 12.7491 3.70472 13.0572 3.9668C13.3653 4.22888 13.6097 4.55763 13.7719 4.92815C13.9341 5.29867 14.0099 5.70124 13.9934 6.10537C13.977 6.50951 13.8689 6.90461 13.6771 7.26075",
  p90bb700: "M11.9957 11.9957C12.5825 11.9957 13.1529 11.8021 13.6185 11.4449C14.084 11.0876 14.4186 10.5868 14.5705 10.02C14.7224 9.45317 14.683 8.8521 14.4585 8.30997C14.2339 7.76783 13.8368 7.31494 13.3286 7.02151",
  p192c4b00: "M13.3066 11.6512C13.3533 12.0126 13.3254 12.3797 13.2247 12.7298C13.124 13.08 12.9525 13.4058 12.721 13.6871C12.4894 13.9684 12.2026 14.1993 11.8783 14.3654C11.554 14.5315 11.1991 14.6294 10.8355 14.653C10.4719 14.6766 10.1073 14.6254 9.76427 14.5026C9.42123 14.3798 9.10701 14.1879 8.84102 13.9389C8.57503 13.6899 8.36291 13.389 8.21777 13.0547C8.07263 12.7205 7.99755 12.3601 7.99716 11.9957C7.99677 12.3601 7.92169 12.7205 7.77655 13.0547C7.63141 13.389 7.41929 13.6899 7.1533 13.9389C6.88731 14.1879 6.57309 14.3798 6.23004 14.5026C5.887 14.6254 5.52242 14.6766 5.15882 14.653C4.79521 14.6294 4.44031 14.5315 4.11602 14.3654C3.79173 14.1993 3.50494 13.9684 3.27336 13.6871C3.04178 13.4058 2.87034 13.08 2.76961 12.7298C2.66888 12.3797 2.64101 12.0126 2.68771 11.6512",
  p1550f540: "M3.99858 11.9957C3.41179 11.9957 2.8414 11.8021 2.37587 11.4449C1.91034 11.0876 1.57569 10.5868 1.42381 10.02C1.27194 9.45317 1.31132 8.8521 1.53587 8.30997C1.76041 7.76783 2.15756 7.31494 2.66572 7.02151",
  pa1e7380: "M4.00058 3.41545C3.60885 3.51618 3.24518 3.70472 2.93711 3.9668C2.62904 4.22888 2.38465 4.55763 2.22244 4.92815C2.06023 5.29867 1.98447 5.70124 2.00088 6.10537C2.0173 6.50951 2.12546 6.90461 2.31718 7.26075",
  p2497b400: "M13.995 10.6629H11.3293C10.9612 10.6629 10.6629 10.9612 10.6629 11.3293V13.995C10.6629 14.3631 10.9612 14.6615 11.3293 14.6615H13.995C14.3631 14.6615 14.6615 14.3631 14.6615 13.995V11.3293C14.6615 10.9612 14.3631 10.6629 13.995 10.6629Z",
  p3d85e372: "M4.66501 10.6629H1.99929C1.63123 10.6629 1.33286 10.9612 1.33286 11.3293V13.995C1.33286 14.3631 1.63123 14.6615 1.99929 14.6615H4.66501C5.03307 14.6615 5.33144 14.3631 5.33144 13.995V11.3293C5.33144 10.9612 5.03307 10.6629 4.66501 10.6629Z",
  p35152900: "M9.33002 1.33286H6.6643C6.29624 1.33286 5.99787 1.63123 5.99787 1.99929V4.66501C5.99787 5.03307 6.29624 5.33144 6.6643 5.33144H9.33002C9.69808 5.33144 9.99645 5.03307 9.99645 4.66501V1.99929C9.99645 1.63123 9.69808 1.33286 9.33002 1.33286Z",
  pb37b980: "M3.33215 10.6629V8.66359C3.33215 8.48684 3.40236 8.31733 3.52734 8.19235C3.65232 8.06737 3.82183 7.99716 3.99858 7.99716H11.9957C12.1725 7.99716 12.342 8.06737 12.467 8.19235C12.592 8.31733 12.6622 8.48684 12.6622 8.66359V10.6629",
  p5826000: "M8.5503 1.45281C8.37665 1.37361 8.18802 1.33262 7.99716 1.33262C7.8063 1.33262 7.61767 1.37361 7.44402 1.45281L1.73272 4.05189C1.61446 4.10403 1.51392 4.18944 1.44333 4.2977C1.37274 4.40597 1.33516 4.53243 1.33516 4.66167C1.33516 4.79092 1.37274 4.91737 1.44333 5.02564C1.51392 5.1339 1.61446 5.21931 1.73272 5.27145L7.45069 7.8772C7.62433 7.9564 7.81297 7.99739 8.00382 7.99739C8.19468 7.99739 8.38331 7.9564 8.55696 7.8772L14.2749 5.27812C14.3932 5.22597 14.4937 5.14057 14.5643 5.0323C14.6349 4.92404 14.6725 4.79758 14.6725 4.66834C14.6725 4.53909 14.6349 4.41264 14.5643 4.30437C14.4937 4.1961 14.3932 4.1107 14.2749 4.05855L8.5503 1.45281Z",
  p1ef25100: "M1.33286 7.99716C1.33254 8.12462 1.36879 8.24951 1.4373 8.357C1.50581 8.46449 1.60371 8.55007 1.71939 8.60361L7.45069 11.2094C7.62343 11.2876 7.81087 11.328 8.00049 11.328C8.19011 11.328 8.37756 11.2876 8.55029 11.2094L14.2683 8.61027C14.3862 8.55725 14.4862 8.47105 14.556 8.36218C14.6258 8.25332 14.6625 8.12649 14.6615 7.99716",
  peefc100: "M1.33286 11.3293C1.33254 11.4568 1.36879 11.5817 1.4373 11.6891C1.50581 11.7966 1.60371 11.8822 1.71939 11.9358L7.45069 14.5415C7.62343 14.6197 7.81087 14.6602 8.00049 14.6602C8.19011 14.6602 8.37756 14.6197 8.55029 14.5415L14.2683 11.9424C14.3862 11.8894 14.4862 11.8032 14.556 11.6943C14.6258 11.5855 14.6625 11.4586 14.6615 11.3293",
  p21404e00: "M13.3286 1.33286H2.66572C1.9296 1.33286 1.33286 1.9296 1.33286 2.66572V5.33144C1.33286 6.06756 1.9296 6.6643 2.66572 6.6643H13.3286C14.0647 6.6643 14.6615 6.06756 14.6615 5.33144V2.66572C14.6615 1.9296 14.0647 1.33286 13.3286 1.33286Z",
  p395b7a00: "M13.3286 9.33002H2.66572C1.9296 9.33002 1.33286 9.92676 1.33286 10.6629V13.3286C1.33286 14.0647 1.9296 14.6615 2.66572 14.6615H13.3286C14.0647 14.6615 14.6615 14.0647 14.6615 13.3286V10.6629C14.6615 9.92676 14.0647 9.33002 13.3286 9.33002Z",
  p2545c340: "M6.44504 2.75637C6.48176 2.37007 6.66119 2.01133 6.94827 1.75025C7.23534 1.48917 7.60945 1.34449 7.99749 1.34449C8.38554 1.34449 8.75964 1.48917 9.04672 1.75025C9.3338 2.01133 9.51322 2.37007 9.54994 2.75637C9.57201 3.00592 9.65388 3.24648 9.78861 3.45768C9.92335 3.66889 10.107 3.84453 10.324 3.96973C10.541 4.09493 10.7849 4.16601 11.0352 4.17695C11.2855 4.18789 11.5347 4.13837 11.7618 4.03259C12.1144 3.8725 12.514 3.84933 12.8828 3.9676C13.2515 4.08587 13.5631 4.33711 13.7568 4.67243C13.9505 5.00775 14.0125 5.40315 13.9308 5.78168C13.8491 6.16021 13.6294 6.49479 13.3146 6.7203C13.1096 6.86415 12.9422 7.05525 12.8267 7.27745C12.7112 7.49965 12.6509 7.74641 12.6509 7.99685C12.6509 8.24728 12.7112 8.49404 12.8267 8.71624C12.9422 8.93844 13.1096 9.12954 13.3146 9.27339C13.6294 9.4989 13.8491 9.83348 13.9308 10.212C14.0125 10.5905 13.9505 10.9859 13.7568 11.3213C13.5631 11.6566 13.2515 11.9078 12.8828 12.0261C12.514 12.1444 12.1144 12.1212 11.7618 11.9611C11.5347 11.8553 11.2855 11.8058 11.0352 11.8167C10.7849 11.8277 10.541 11.8988 10.324 12.024C10.107 12.1492 9.92335 12.3248 9.78861 12.536C9.65388 12.7472 9.57201 12.9878 9.54994 13.2373C9.51322 13.6236 9.3338 13.9824 9.04672 14.2434C8.75964 14.5045 8.38554 14.6492 7.99749 14.6492C7.60945 14.6492 7.23534 14.5045 6.94827 14.2434C6.66119 13.9824 6.48176 13.6236 6.44504 13.2373C6.42301 12.9877 6.34115 12.747 6.20637 12.5357C6.0716 12.3245 5.88789 12.1488 5.67081 12.0236C5.45372 11.8983 5.20966 11.8273 4.95929 11.8164C4.70892 11.8055 4.45962 11.8552 4.2325 11.9611C3.87988 12.1212 3.48031 12.1444 3.11156 12.0261C2.74281 11.9078 2.43125 11.6566 2.23753 11.3213C2.0438 10.9859 1.98177 10.5905 2.06351 10.212C2.14524 9.83348 2.36489 9.4989 2.67971 9.27339C2.88472 9.12954 3.05207 8.93844 3.1676 8.71624C3.28313 8.49404 3.34345 8.24728 3.34345 7.99685C3.34345 7.74641 3.28313 7.49965 3.1676 7.27745C3.05207 7.05525 2.88472 6.86415 2.67971 6.7203C2.36534 6.49468 2.14607 6.16023 2.06453 5.78195C1.983 5.40368 2.04501 5.0086 2.23853 4.6735C2.43204 4.3384 2.74323 4.08722 3.11162 3.96877C3.48001 3.85032 3.87928 3.87307 4.23183 4.03259C4.45892 4.13837 4.70816 4.18789 4.95844 4.17695C5.20872 4.16601 5.45268 4.09493 5.66968 3.96973C5.88667 3.84453 6.0703 3.66889 6.20504 3.45768C6.33977 3.24648 6.42164 3.00592 6.44371 2.75637",
  p1f301500: "M7.99716 9.99645C9.10134 9.99645 9.99645 9.10134 9.99645 7.99716C9.99645 6.89298 9.10134 5.99787 7.99716 5.99787C6.89298 5.99787 5.99787 6.89298 5.99787 7.99716C5.99787 9.10134 6.89298 9.99645 7.99716 9.99645Z",
  p239e0700: "M6.8429 13.995C6.95989 14.1976 7.12815 14.3659 7.33076 14.4828C7.53337 14.5998 7.7632 14.6614 7.99716 14.6614C8.23111 14.6614 8.46095 14.5998 8.66356 14.4828C8.86617 14.3659 9.03443 14.1976 9.15142 13.995",
  p35d35500: "M2.17389 10.2137C2.08683 10.3091 2.02938 10.4278 2.00852 10.5553C1.98767 10.6827 2.0043 10.8135 2.05641 10.9317C2.10851 11.0499 2.19384 11.1504 2.30202 11.221C2.41019 11.2916 2.53655 11.3292 2.66572 11.3293H13.3286C13.4578 11.3294 13.5841 11.2919 13.6924 11.2214C13.8006 11.151 13.8861 11.0506 13.9383 10.9325C13.9906 10.8143 14.0074 10.6836 13.9867 10.5561C13.966 10.4286 13.9087 10.3099 13.8218 10.2144C12.9354 9.3007 11.9957 8.32971 11.9957 5.33144C11.9957 4.27095 11.5745 3.2539 10.8246 2.50402C10.0747 1.75414 9.05765 1.33286 7.99716 1.33286C6.93667 1.33286 5.91962 1.75414 5.16974 2.50402C4.41986 3.2539 3.99858 4.27095 3.99858 5.33144C3.99858 8.32971 3.05825 9.3007 2.17389 10.2137Z",
  p2e209400: "M7.99716 14.6615C11.6777 14.6615 14.6615 11.6777 14.6615 7.99716C14.6615 4.31657 11.6777 1.33286 7.99716 1.33286C4.31657 1.33286 1.33286 4.31657 1.33286 7.99716C1.33286 11.6777 4.31657 14.6615 7.99716 14.6615Z",
  p284f1000: "M6.05785 5.99788C6.21453 5.55249 6.52378 5.17691 6.93084 4.93768C7.3379 4.69845 7.81649 4.611 8.28184 4.69082C8.7472 4.77064 9.16929 5.01258 9.47335 5.37379C9.77742 5.735 9.94384 6.19216 9.94313 6.66431C9.94313 7.99717 7.94384 8.6636 7.94384 8.6636",
  p3cc8d400: "M12.6622 1.99929H3.33215C2.59603 1.99929 1.99929 2.59603 1.99929 3.33215V12.6622C1.99929 13.3983 2.59603 13.995 3.33215 13.995H12.6622C13.3983 13.995 13.995 13.3983 13.995 12.6622V3.33215C13.995 2.59603 13.3983 1.99929 12.6622 1.99929Z",
  pbae9780: "M0.66643 8.66359L4.66501 4.66501L0.66643 0.66643",
  p28efdb00: "M7.34206 1.87533C7.37061 1.72246 7.45174 1.58438 7.57138 1.48502C7.69102 1.38565 7.84164 1.33126 7.99716 1.33126C8.15268 1.33126 8.3033 1.38565 8.42294 1.48502C8.54258 1.58438 8.62371 1.72246 8.65226 1.87533L9.35268 5.57935C9.40242 5.84269 9.5304 6.08492 9.7199 6.27442C9.9094 6.46392 10.1516 6.59189 10.415 6.64164L14.119 7.34206C14.2719 7.37061 14.4099 7.45173 14.5093 7.57137C14.6087 7.69101 14.6631 7.84164 14.6631 7.99716C14.6631 8.15268 14.6087 8.3033 14.5093 8.42294C14.4099 8.54258 14.2719 8.6237 14.119 8.65226L10.415 9.35268C10.1516 9.40242 9.9094 9.5304 9.7199 9.7199C9.5304 9.9094 9.40242 10.1516 9.35268 10.415L8.65226 14.119C8.62371 14.2719 8.54258 14.4099 8.42294 14.5093C8.3033 14.6087 8.15268 14.6631 7.99716 14.6631C7.84164 14.6631 7.69102 14.6087 7.57138 14.5093C7.45174 14.4099 7.37061 14.2719 7.34206 14.119L6.64164 10.415C6.5919 10.1516 6.46392 9.9094 6.27442 9.7199C6.08492 9.5304 5.84269 9.40242 5.57935 9.35268L1.87533 8.65226C1.72246 8.6237 1.58438 8.54258 1.48502 8.42294C1.38566 8.3033 1.33126 8.15268 1.33126 7.99716C1.33126 7.84164 1.38566 7.69101 1.48502 7.57137C1.58438 7.45173 1.72246 7.37061 1.87533 7.34206L5.57935 6.64164C5.84269 6.59189 6.08492 6.46392 6.27442 6.27442C6.46392 6.08492 6.5919 5.84269 6.64164 5.57935L7.34206 1.87533Z",
  // Add new path for the collapsed toggle icon
  p1cec7ff0: "M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z",
};

const SvgIcon = ({ children, className, viewBox = "0 0 16 16" }: { children: React.ReactNode; className?: string; viewBox?: string }) => (
  <div className={cn("relative shrink-0 size-[16px] flex items-center justify-center", className)}>
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={viewBox}>
      {children}
    </svg>
  </div>
);

// New Logo Components
function LogoGroup({ path, fill }: { path: string, fill: string }) {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.46482 6.26493">
        <path d={path} fill={fill} />
      </svg>
    </div>
  );
}

function LogoGroupGradient({ path, id, stops }: { path: string, id: string, stops: { offset?: number | string, stopColor: string }[] }) {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.29941 4.53177">
        <path d={path} fill={`url(#${id})`} />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id={id} x1="2.13882" x2="4.59636" y1="0.834636" y2="4.26592">
            {stops.map((stop, i) => (
              <stop key={i} offset={stop.offset} stopColor={stop.stopColor} />
            ))}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function EBayDatAiLogo() {
  return (
    <div className="absolute left-0 top-0 size-[24px]">
      {/* Group */}
      <div className="absolute contents inset-[2.7%_41.79%_71.19%_27.05%]">
         <div className="absolute inset-[2.7%_41.85%_71.19%_27.05%]">
            <LogoGroup path={svgPaths.p35c9d900} fill="#F02D2D" />
         </div>
         <div className="absolute inset-[9.85%_41.79%_71.26%_27.8%]">
            <LogoGroupGradient path={svgPaths.pf7da000} id="paint0_linear_2_509" stops={[{ stopColor: "#F02D2D" }, { offset: 1, stopColor: "#FF8888" }]} />
         </div>
      </div>
      
      {/* Group1 */}
      <div className="absolute contents inset-[10.82%_59.51%_48.69%_0]">
        <div className="absolute flex inset-[10.86%_59.55%_48.69%_0] items-center justify-center">
            <div className="-rotate-45 flex-none h-[6.265px] w-[7.465px]">
                <LogoGroup path={svgPaths.p2a77a00} fill="#0968F6" />
            </div>
        </div>
        <div className="absolute flex inset-[15.87%_59.56%_49.27%_5.58%] items-center justify-center">
             <div className="-rotate-45 flex-none h-[4.532px] w-[7.299px]">
                <LogoGroupGradient path={svgPaths.p28a3e780} id="paint0_linear_2_524" stops={[{ stopColor: "#6AA4FA" }, { offset: 1, stopColor: "#0968F6" }]} />
             </div>
        </div>
      </div>

       {/* Group2 */}
      <div className="absolute contents inset-[41.73%_71.19%_27.11%_2.7%]">
         <div className="absolute flex inset-[41.79%_71.19%_27.11%_2.7%] items-center justify-center">
            <div className="-rotate-90 flex-none h-[6.265px] w-[7.465px]">
               <LogoGroup path={svgPaths.p194c3e00} fill="#FFBD14" />
            </div>
         </div>
         <div className="absolute flex inset-[41.73%_71.26%_27.85%_9.85%] items-center justify-center">
            <div className="-rotate-90 flex-none h-[4.532px] w-[7.299px]">
               <LogoGroupGradient path={svgPaths.p3486d300} id="paint0_linear_2_507" stops={[{ stopColor: "#FFBD14" }, { offset: 1, stopColor: "#FFD976" }]} />
            </div>
         </div>
      </div>

      {/* Group3 */}
      <div className="absolute contents inset-[59.51%_47.91%_0_11.59%]">
         <div className="absolute flex inset-[59.55%_47.91%_0_11.63%] items-center justify-center">
            <div className="-rotate-135 flex-none h-[6.265px] w-[7.465px]">
                 <LogoGroup path={svgPaths.p2a77a00} fill="#92C821" />
            </div>
         </div>
         <div className="absolute flex inset-[59.56%_48.5%_5.58%_16.65%] items-center justify-center">
             <div className="-rotate-135 flex-none h-[4.532px] w-[7.299px]">
                 <LogoGroupGradient path={svgPaths.p28a3e780} id="paint0_linear_2_505" stops={[{ stopColor: "#92C821" }, { offset: 1, stopColor: "#A3DE27" }]} />
             </div>
         </div>
      </div>

      {/* Group4 */}
      <div className="absolute contents inset-[71.1%_26.72%_2.8%_42.12%]">
         <div className="absolute flex inset-[71.1%_26.72%_2.8%_42.18%] items-center justify-center">
            <div className="flex-none h-[6.265px] rotate-180 w-[7.465px]">
                <LogoGroup path={svgPaths.p35c9d900} fill="#F02D2D" />
            </div>
         </div>
         <div className="absolute flex inset-[71.17%_27.47%_9.95%_42.12%] items-center justify-center">
            <div className="flex-none h-[4.532px] rotate-180 w-[7.299px]">
                <LogoGroupGradient path={svgPaths.p2afc3d80} id="paint0_linear_2_526" stops={[{ stopColor: "#F02D2D" }, { offset: 1, stopColor: "#FF8888" }]} />
            </div>
         </div>
      </div>

      {/* Group5 */}
      <div className="absolute contents inset-[47.91%_0_11.59%_59.51%]">
         <div className="absolute flex inset-[47.91%_0_11.63%_59.55%] items-center justify-center">
            <div className="flex-none h-[6.265px] rotate-135 w-[7.465px]">
                <LogoGroup path={svgPaths.p2a77a00} fill="#0968F6" />
            </div>
         </div>
         <div className="absolute flex inset-[48.5%_5.58%_16.65%_59.56%] items-center justify-center">
             <div className="flex-none h-[4.532px] rotate-135 w-[7.299px]">
                 <LogoGroupGradient path={svgPaths.p28a3e780} id="paint0_linear_2_524_2" stops={[{ stopColor: "#6AA4FA" }, { offset: 1, stopColor: "#0968F6" }]} />
             </div>
         </div>
      </div>

      {/* Group6 */}
      <div className="absolute contents inset-[26.28%_2.8%_42.56%_71.1%]">
          <div className="absolute flex inset-[26.28%_2.8%_42.62%_71.1%] items-center justify-center">
             <div className="flex-none h-[6.265px] rotate-90 w-[7.465px]">
                 <LogoGroup path={svgPaths.p194c3e00} fill="#FFBD14" />
             </div>
          </div>
          <div className="absolute flex inset-[27.02%_9.95%_42.56%_71.17%] items-center justify-center">
             <div className="flex-none h-[4.532px] rotate-90 w-[7.299px]">
                 <LogoGroupGradient path={svgPaths.p3486d300} id="paint0_linear_2_507_2" stops={[{ stopColor: "#FFBD14" }, { offset: 1, stopColor: "#FFD976" }]} />
             </div>
          </div>
      </div>

      {/* Group7 */}
      <div className="absolute contents inset-[0_10.43%_59.51%_49.07%]">
          <div className="absolute flex inset-[0_10.47%_59.55%_49.07%] items-center justify-center">
              <div className="flex-none h-[6.265px] rotate-45 w-[7.465px]">
                  <LogoGroup path={svgPaths.p2a77a00} fill="#92C821" />
              </div>
          </div>
          <div className="absolute flex inset-[5.58%_15.49%_59.56%_49.65%] items-center justify-center">
              <div className="flex-none h-[4.532px] rotate-45 w-[7.299px]">
                  <LogoGroupGradient path={svgPaths.p28a3e780} id="paint0_linear_2_505_2" stops={[{ stopColor: "#92C821" }, { offset: 1, stopColor: "#A3DE27" }]} />
              </div>
          </div>
      </div>
    </div>
  );
}

function LogoText() {
  return (
    <div className="absolute inset-[20.83%_0.99%_24.33%_29.63%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.9328 13.1601">
        <g id="Title">
          <path d={svgPaths.p35659a00} fill="#0A0A0A" />
          <path d={svgPaths.p2812cb00} fill="#0A0A0A" />
          <path d={svgPaths.p28bd2080} fill="#0A0A0A" />
          <path d={svgPaths.p2f14a300} fill="#0A0A0A" />
          <path d={svgPaths.p32e7100} fill="#0A0A0A" />
          <path d={svgPaths.pe3af00} fill="#0A0A0A" />
          <path d={svgPaths.p90e31e0} fill="#0A0A0A" />
          <path d={svgPaths.p2ca52480} fill="#0A0A0A" />
          <path d={svgPaths.p168f3400} fill="#0A0A0A" />
        </g>
      </svg>
    </div>
  );
}

export function Sidebar({ onNavigate, currentPage }: { onNavigate: (page: 'emilyProject' | 'dashboard' | 'notebooks' | 'pipelines' | 'artifacts' | 'dataModel' | 'catalog' | 'projectHome' | 'askNeo') => void; currentPage: 'emilyProject' | 'dashboard' | 'notebooks' | 'pipelines' | 'artifacts' | 'dataModel' | 'catalog' | 'projectHome' | 'askNeo' }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>(['Shared Tools']); // expandable nav groups

  const toggleExpand = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div className={cn(
      "h-screen bg-[#fafafa] border-r border-[#ebebeb] flex flex-col flex-shrink-0 relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] font-sans transition-all duration-300",
      isCollapsed ? "w-[72px]" : "w-[255px]"
    )}>
      {/* Logo */}
      <div className={cn(
        "h-[64px] border-b border-[#ebebeb] flex items-center flex-shrink-0 transition-all duration-300",
        isCollapsed ? "justify-center px-0" : "px-6"
      )}>
        <div className={cn(
          "transition-all duration-300",
          isCollapsed ? "relative w-[24px] h-[24px]" : "relative w-[108px] h-[24px]"
        )}>
          <EBayDatAiLogo />
          <div className={cn(
            "transition-opacity duration-200",
            isCollapsed ? "opacity-0 hidden" : "opacity-100 block"
          )}>
            <LogoText />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto py-2 px-2 space-y-1 relative scrollbar-hide">
        {/* New */}
        <NavItem
          label="New"
          isCollapsed={isCollapsed}
          icon={
            <SvgIcon>
              <path d="M3.33215 7.99716H12.6622" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d="M7.99716 3.33215V12.6622" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            </SvgIcon>
          }
        />

        {/* Ask Neo */}
        <NavItem
          label="Ask Neo"
          isCollapsed={isCollapsed}
          isActive={currentPage === 'askNeo'}
          onClick={() => onNavigate('askNeo')}
          icon={
            <SvgIcon>
              <g clipPath="url(#clip0_askneo)">
                <path d={svgPaths.p28efdb00} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d="M13.3286 1.33286V3.99858" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d="M14.6615 2.66572H11.9957" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d={svgPaths.p2d4b280} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
              <defs>
                <clipPath id="clip0_askneo">
                  <rect fill="white" height="16" width="16" />
                </clipPath>
              </defs>
            </SvgIcon>
          }
        />

        {/* Home */}
        <NavItem
          label="Home"
          isCollapsed={isCollapsed}
          isActive={currentPage === 'projectHome'}
          onClick={() => onNavigate('projectHome')}
          icon={
            <SvgIcon>
              <path d={svgPaths.p2e627100} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p34fdb600} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            </SvgIcon>
          }
        />

        {/* Catalog */}
        <NavItem
          label="Catalog"
          isCollapsed={isCollapsed}
          isActive={currentPage === 'catalog'}
          onClick={() => onNavigate('catalog')}
          icon={
            <SvgIcon>
              <path d="M7.99716 4.66501V13.995" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.pd5f2f00} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            </SvgIcon>
          }
        />

        {/* Data Product */}
        <NavItem
          label="Data Product"
          isCollapsed={isCollapsed}
          icon={
            <SvgIcon>
              <path d={svgPaths.p8cf8380} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d="M2.06793 4.02124H13.9264" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p35edb600} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            </SvgIcon>
          }
        />

        {/* Separator */}
        <div className="px-3 py-1"><div className="h-px bg-[#ebebeb]" /></div>

        {/* Project nav item */}
        <NavItem
          label="Project"
          isCollapsed={isCollapsed}
          isActive={currentPage === 'emilyProject'}
          onClick={() => onNavigate('emilyProject')}
          isProject
          icon={
            <SvgIcon>
              <path d={svgPaths.pff0fc00} stroke={currentPage === 'emilyProject' ? '#0968F6' : '#252525'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p1d76d410} stroke={currentPage === 'emilyProject' ? '#0968F6' : '#252525'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p2f091200} stroke={currentPage === 'emilyProject' ? '#0968F6' : '#252525'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p39897300} stroke={currentPage === 'emilyProject' ? '#0968F6' : '#252525'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            </SvgIcon>
          }
        />

        {/* Data Engineering */}
        <NavItem
          label="Data Engineering"
          hasChevron
          isCollapsed={isCollapsed}
          icon={
            <SvgIcon>
              <path d={svgPaths.p1d8ada00} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p196b2a00} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d="M7.99716 14.6615V13.3286" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d="M7.99716 1.33286V2.66572" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d="M9.33002 7.99716H14.6615" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p32cc7300} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p341b3600} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d="M1.33286 7.99716H2.66572" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p224a3a65} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p2b2cc500} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p22cb6080} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p199c5580} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p6135000} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p65ed680} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            </SvgIcon>
          }
        />

        {/* AI Engineering */}
        <NavItem
          label="AI Engineering"
          hasChevron
          isCollapsed={isCollapsed}
          icon={
            <SvgIcon>
              <path d="M7.99716 11.9957V3.33215" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p307ff100} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p93e5780} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p33dd0700} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p90bb700} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p192c4b00} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p1550f540} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.pa1e7380} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            </SvgIcon>
          }
        />

        {/* Knowledge Graphs */}
        <NavItem
          label="Knowledge Graphs"
          hasChevron
          isCollapsed={isCollapsed}
          icon={
            <SvgIcon>
              <path d={svgPaths.p2497b400} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p3d85e372} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p35152900} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.pb37b980} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d="M7.99716 7.99716V5.33144" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            </SvgIcon>
          }
        />

        {/* Shared Tools */}
        <NavItem
          label="Shared Tools"
          hasChevron
          isExpanded={expandedItems.includes('Shared Tools')}
          onToggle={() => toggleExpand('Shared Tools')}
          isCollapsed={isCollapsed}
          isActive={isCollapsed && (currentPage === 'notebooks' || currentPage === 'pipelines' || currentPage === 'artifacts')}
          icon={
            <SvgIcon>
              <g clipPath="url(#clip0_shared_tools)">
                <path d="M8.5503 1.45281C8.37665 1.37361 8.18802 1.33262 7.99716 1.33262C7.8063 1.33262 7.61767 1.37361 7.44402 1.45281L1.73272 4.05189C1.61446 4.10403 1.51392 4.18944 1.44333 4.2977C1.37274 4.40597 1.33516 4.53243 1.33516 4.66167C1.33516 4.79092 1.37274 4.91737 1.44333 5.02564C1.51392 5.1339 1.61446 5.21931 1.73272 5.27145L7.45069 7.8772C7.62433 7.9564 7.81297 7.99739 8.00382 7.99739C8.19468 7.99739 8.38331 7.9564 8.55696 7.8772L14.2749 5.27812C14.3932 5.22597 14.4937 5.14057 14.5643 5.0323C14.6349 4.92404 14.6725 4.79758 14.6725 4.66834C14.6725 4.53909 14.6349 4.41264 14.5643 4.30437C14.4937 4.1961 14.3932 4.1107 14.2749 4.05855L8.5503 1.45281Z" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d="M1.33286 7.99716C1.33254 8.12462 1.36879 8.24951 1.4373 8.357C1.50581 8.46449 1.60371 8.55007 1.71939 8.60361L7.45069 11.2094C7.62343 11.2876 7.81087 11.328 8.00049 11.328C8.19011 11.328 8.37756 11.2876 8.55029 11.2094L14.2683 8.61027C14.3862 8.55725 14.4862 8.47105 14.556 8.36218C14.6258 8.25332 14.6625 8.12649 14.6615 7.99716" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                <path d="M1.33286 11.3293C1.33254 11.4568 1.36879 11.5817 1.4373 11.6891C1.50581 11.7966 1.60371 11.8822 1.71939 11.9358L7.45069 14.5415C7.62343 14.6197 7.81087 14.6602 8.00049 14.6602C8.19011 14.6602 8.37756 14.6197 8.55029 14.5415L14.2683 11.9424C14.3862 11.8894 14.4862 11.8032 14.556 11.6943C14.6258 11.5855 14.6625 11.4586 14.6615 11.3293" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </g>
              <defs>
                <clipPath id="clip0_shared_tools">
                  <rect fill="white" height="16" width="16" />
                </clipPath>
              </defs>
            </SvgIcon>
          }
        />

        {/* Shared Tools Submenu */}
        {expandedItems.includes('Shared Tools') && !isCollapsed && (
          <div className="space-y-1 mt-1">
            <SubMenuItem
              label="Notebooks"
              isActive={currentPage === 'notebooks'}
              onClick={() => onNavigate('notebooks')}
              icon={<div className="w-4 h-4"><NotebookIcon /></div>}
            />
            <SubMenuItem
              label="Pipelines"
              isActive={currentPage === 'pipelines'}
              onClick={() => onNavigate('pipelines')}
              icon={
                <SvgIcon>
                  <path d="M6 2H3.33333C2.59695 2 2 2.59695 2 3.33333V6C2 6.73638 2.59695 7.33333 3.33333 7.33333H6C6.73638 7.33333 7.33333 6.73638 7.33333 6V3.33333C7.33333 2.59695 6.73638 2 6 2Z" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M4.66667 7.33333V10C4.66667 10.3536 4.80714 10.6928 5.05719 10.9428C5.30724 11.1929 5.64638 11.3333 6 11.3333H8.66667" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M12.6667 8.66667H10C9.26362 8.66667 8.66667 9.26362 8.66667 10V12.6667C8.66667 13.403 9.26362 14 10 14H12.6667C13.403 14 14 13.403 14 12.6667V10C14 9.26362 13.403 8.66667 12.6667 8.66667Z" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </SvgIcon>
              }
            />
            <SubMenuItem
              label="Artifacts"
              isActive={currentPage === 'artifacts'}
              onClick={() => onNavigate('artifacts')}
              icon={
                <SvgIcon>
                  <path d="M7.33333 14.4867C7.53603 14.6037 7.76595 14.6653 8 14.6653C8.23405 14.6653 8.46397 14.6037 8.66667 14.4867L13.3333 11.82C13.5358 11.7031 13.704 11.535 13.821 11.3326C13.938 11.1301 13.9998 10.9005 14 10.6667V5.33333C13.9998 5.09951 13.938 4.86987 13.821 4.66744C13.704 4.46501 13.5358 4.2969 13.3333 4.18L8.66667 1.51333C8.46397 1.3963 8.23405 1.3347 8 1.3347C7.76595 1.3347 7.53603 1.3963 7.33333 1.51333L2.66667 4.18C2.46418 4.2969 2.29599 4.46501 2.17897 4.66744C2.06196 4.86987 2.00024 5.09951 2 5.33333V10.6667C2.00024 10.9005 2.06196 11.1301 2.17897 11.3326C2.29599 11.535 2.46418 11.7031 2.66667 11.82L7.33333 14.4867Z" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M8 14.6667V8" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M2.19333 4.66667L8 8L13.8067 4.66667" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M5 2.84666L11 6.27999" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </SvgIcon>
              }
            />
            <SubMenuItem
              label="UDFs"
              icon={
                <SvgIcon>
                  <path d="M10 1.33333H4C3.64638 1.33333 3.30724 1.47381 3.05719 1.72386C2.80714 1.97391 2.66667 2.31304 2.66667 2.66667V13.3333C2.66667 13.687 2.80714 14.0261 3.05719 14.2761C3.30724 14.5262 3.64638 14.6667 4 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2761C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V4.66667L10 1.33333Z" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M9.33333 1.33333V4C9.33333 4.35362 9.47381 4.69276 9.72386 4.94281C9.97391 5.19286 10.313 5.33333 10.6667 5.33333H13.3333" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M6.66667 6H5.33333" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M10.6667 8.66667H5.33333" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M10.6667 11.3333H5.33333" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </SvgIcon>
              }
            />
            <SubMenuItem
              label="Golden Docker Images"
              icon={
                <SvgIcon>
                  <path d="M14 5.33335C13.9998 5.09953 13.938 4.86989 13.821 4.66746C13.704 4.46503 13.5358 4.29692 13.3333 4.18002L8.66667 1.51335C8.46397 1.39633 8.23405 1.33472 8 1.33472C7.76595 1.33472 7.53603 1.39633 7.33333 1.51335L2.66667 4.18002C2.46418 4.29692 2.29599 4.46503 2.17897 4.66746C2.06196 4.86989 2.00024 5.09953 2 5.33335V10.6667C2.00024 10.9005 2.06196 11.1301 2.17897 11.3326C2.29599 11.535 2.46418 11.7031 2.66667 11.82L7.33333 14.4867C7.53603 14.6037 7.76595 14.6653 8 14.6653C8.23405 14.6653 8.46397 14.6037 8.66667 14.4867L13.3333 11.82C13.5358 11.7031 13.704 11.535 13.821 11.3326C13.938 11.1301 13.9998 10.9005 14 10.6667V5.33335Z" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M2.2 4.66667L8 8L13.8 4.66667" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M8 14.6667V8" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </SvgIcon>
              }
            />
          </div>
        )}

        {/* Data Model */}
        <NavItem 
          label="Data Model" 
          isCollapsed={isCollapsed}
          isActive={currentPage === 'dataModel'}
          onClick={() => onNavigate('dataModel')}
          icon={
            <SvgIcon>
              <path d={svgPaths.p3cc8d400} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d="M5.99787 4.66501H9.99645" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d="M5.99787 7.99716H9.99645" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d="M5.99787 11.3293H9.99645" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            </SvgIcon>
          }
        />

        {/* Data Serving */}
        <NavItem 
          label="Data Serving" 
          hasChevron
          isCollapsed={isCollapsed}
          icon={
            <SvgIcon>
               <path d={svgPaths.p21404e00} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
               <path d={svgPaths.p395b7a00} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
               <path d="M3.99858 3.99858H4.00524" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
               <path d="M3.99858 11.9957H4.00524" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            </SvgIcon>
          }
        />

        {/* Operations */}
        <NavItem 
          label="Operations" 
          hasChevron
          isCollapsed={isCollapsed}
          icon={
            <SvgIcon>
              <path d={svgPaths.p2545c340} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p1f301500} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            </SvgIcon>
          }
        />

        {/* Alerts */}
        <NavItem 
          label="Alerts" 
          isCollapsed={isCollapsed}
          icon={
            <SvgIcon>
              <path d={svgPaths.p239e0700} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p35d35500} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            </SvgIcon>
          }
        />

        {/* Support */}
        <NavItem 
          label="Support" 
          isCollapsed={isCollapsed}
          icon={
            <SvgIcon>
              <path d={svgPaths.p2e209400} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d={svgPaths.p284f1000} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              <path d="M7.99716 11.3293H8.00382" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            </SvgIcon>
          }
        />
      </div>

       {/* Bottom Actions */}
      <div className="h-[64px] border-t border-[#ebebeb] flex items-center justify-center">
         <button 
           className="flex items-center justify-center size-[32px] hover:bg-gray-100 rounded-full transition-colors"
           onClick={() => setIsCollapsed(!isCollapsed)}
         >
            {isCollapsed ? (
              <SvgIcon viewBox="0 0 20 20">
                <g>
                  <path d={svgPaths.p1cec7ff0} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d="M12.5 2.5V17.5" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                </g>
              </SvgIcon>
            ) : (
              <SvgIcon>
                  <path d={svgPaths.p3cc8d400} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d="M5.99786 1.99929V13.995" stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </SvgIcon>
            )}
         </button>
      </div>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  isProject?: boolean;
  hasChevron?: boolean;
  isCollapsed: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
  onClick?: () => void;
}

function NavItem({ icon, label, isActive, isProject, hasChevron, isCollapsed, isExpanded, onToggle, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick ?? onToggle}
      className={cn(
        "h-[40px] flex items-center rounded-lg transition-all group relative font-sans",
        isCollapsed ? "justify-center px-0 w-full" : "w-full px-3",
        isActive
          ? "bg-[#f7f7f7] border border-[#ebebeb] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
          : "hover:bg-gray-100 border border-transparent"
      )}
    >
      <span className={cn("transition-all flex items-center justify-center", isCollapsed ? "mr-0" : "mr-3", isActive && "[&_path]:stroke-[#0968F6]")}>{icon}</span>
      <span className={cn(
        "flex-1 text-left text-[14px] font-medium leading-[20px] transition-opacity duration-200 truncate",
        isActive ? "text-[#0968F6]" : "text-[#252525]",
        isCollapsed ? "opacity-0 w-0 hidden" : "opacity-100 w-auto"
      )}>{label}</span>
      {hasChevron && !isCollapsed && (
        <span className={cn("text-[#252525] transition-transform duration-200", isExpanded && "rotate-90")}>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={svgPaths.pbae9780} stroke="#252525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        </span>
      )}
    </button>
  );
}

interface SubMenuItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}

function SubMenuItem({ label, isActive, onClick, icon }: SubMenuItemProps) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "h-[32px] w-full flex items-center gap-3 rounded-lg transition-all pl-9 pr-3 text-[13px] font-normal leading-[18px]",
        isActive 
          ? "bg-[#f7f7f7] border border-[#ebebeb] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-[#0968F6]"
          : "text-[#252525] hover:bg-gray-100 border border-transparent"
      )}
    >
      {icon && <span className={cn("shrink-0", isActive && "[&_path]:stroke-[#0968F6]")}>{icon}</span>}
      <span className="font-['Inter:Regular',sans-serif] tracking-[-0.0762px] text-left truncate">{label}</span>
    </button>
  );
}
