import React, { forwardRef } from 'react'
import { CreateIcon } from '../../utils/create-icon'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

const IconComponent: React.ForwardRefRenderFunction<SVGSVGElement, Props> = (
    { color, ...props },
    ref,
) => {
    // Assuming CreateIcon returns a ReactElement
    const IconElement = CreateIcon({
        displayName: 'WalletRefreshFilled',
        paths: [
            {
                d: 'M18.1412 6.62059C18.1268 6.01393 18.0743 5.50716 17.874 5.05797C17.5098 4.24111 16.8113 3.59212 15.9321 3.25377C15.5573 3.10953 15.1678 3.05241 14.7469 3.02572C14.3409 2.99999 13.8449 2.99999 13.2441 3H10.0343C8.81161 2.99999 7.83916 2.99999 7.05461 3.05954C6.2512 3.12053 5.56614 3.24809 4.93888 3.54503C3.92612 4.02446 3.10273 4.78945 2.5867 5.73038C2.26709 6.31315 2.12979 6.94962 2.06415 7.69605C2.00005 8.42496 2.00005 9.32842 2.00006 10.4644L2.00003 13.5192C1.99958 14.5447 1.99909 15.6606 2.40977 16.5817C2.95604 17.807 4.00385 18.7805 5.32268 19.288C5.86234 19.4957 6.43867 19.5845 7.10985 19.6271C7.70295 19.6647 8.42109 19.6683 9.30501 19.6686C9.28066 19.4716 9.28133 19.2687 9.30971 19.0632C9.43178 18.1793 9.67068 17.3133 10.0206 16.4847C10.3264 15.7606 10.9185 15.206 11.6401 14.9041C11.3756 13.9862 11.6889 12.9679 12.5302 12.3249C13.1366 11.8615 13.8451 11.4979 14.631 11.2677C16.5376 10.7092 18.5169 11.0394 20.0514 12.0078C20.4976 11.8314 21.0007 11.7649 21.5152 11.839C21.5864 11.8493 21.6566 11.862 21.7256 11.8772C21.7191 11.5873 21.7084 11.323 21.6906 11.0811C21.6448 10.4575 21.5492 9.92207 21.3257 9.42069C20.7794 8.1954 19.7316 7.22191 18.4128 6.71438C18.3233 6.67996 18.2329 6.64881 18.1412 6.62059ZM14.6247 4.68873C14.287 4.66732 13.8525 4.66687 13.2133 4.66687H10.0736C8.80279 4.66687 7.90364 4.66752 7.20071 4.72087C6.50825 4.77344 6.08558 4.87297 5.75339 5.03022C5.07822 5.34984 4.52929 5.85984 4.18527 6.48712C4.04387 6.74496 3.94583 7.06147 3.8844 7.53379C4.31058 7.19519 4.79493 6.91748 5.32268 6.71438C5.86234 6.5067 6.43867 6.41787 7.10985 6.37532C7.76598 6.33373 8.57515 6.33373 9.59251 6.33373L14.2008 6.33373C15.0359 6.3337 15.7361 6.33367 16.3346 6.36004C16.3155 6.01471 16.2794 5.83697 16.2164 5.69585C16.0344 5.28742 15.6851 4.96293 15.2455 4.79375C15.1257 4.74766 14.9544 4.70962 14.6247 4.68873Z',
                fill: true,
                stroke: false,
            },
            {
                d: 'M15.71 14.4471C16.7858 14.132 17.9156 14.4771 18.5932 15.2374C18.5002 15.2008 18.408 15.1627 18.3164 15.1229C17.8677 14.9278 17.3337 15.1076 17.1237 15.5245C16.9138 15.9415 17.1073 16.4376 17.5561 16.6326C18.2912 16.9522 19.0655 17.1861 19.8614 17.3293C19.9238 17.3405 19.9865 17.3475 20.0491 17.3503C20.5951 17.3748 21.1086 17.0822 21.3264 16.6039C21.6422 15.9102 21.8649 15.1826 21.9893 14.4375C22.0652 13.9826 21.7298 13.5567 21.2403 13.4862C20.7507 13.4157 20.2923 13.7272 20.2163 14.1821C20.2034 14.2595 20.1892 14.3367 20.1737 14.4136C19.0763 12.9814 17.0727 12.3002 15.1705 12.8574C14.6073 13.0224 14.102 13.2821 13.6701 13.6122C13.2874 13.9046 13.2324 14.4298 13.5472 14.7853C13.8619 15.1408 14.4273 15.1919 14.8099 14.8994C15.0674 14.7026 15.3696 14.5469 15.71 14.4471Z',
                fill: true,
                stroke: false,
            },
            {
                d: 'M11.6908 17.0935C11.9027 16.5918 12.4387 16.2823 13.0085 16.3189C13.0504 16.3216 13.0925 16.3261 13.1348 16.3327C13.9344 16.4565 14.7151 16.6714 15.459 16.973C15.9131 17.157 16.1206 17.6483 15.9225 18.0701C15.7243 18.492 15.1956 18.6848 14.7415 18.5007C14.6275 18.4545 14.5125 18.4108 14.3964 18.3696C15.0676 19.1691 16.2265 19.5391 17.3285 19.2163C17.6719 19.1157 17.9765 18.9581 18.2355 18.7588C18.617 18.4652 19.1825 18.5145 19.4986 18.869C19.8146 19.2235 19.7614 19.7489 19.3799 20.0425C18.9454 20.3768 18.4362 20.6396 17.868 20.806C15.9851 21.3576 14.0028 20.6957 12.8984 19.293C12.8876 19.3577 12.8777 19.4225 12.8688 19.4875C12.8057 19.944 12.3563 20.2667 11.8648 20.2081C11.3734 20.1495 11.0262 19.7319 11.0892 19.2754C11.1925 18.5274 11.3947 17.7947 11.6908 17.0935Z',
                fill: true,
                stroke: false,
            },
        ],
        viewBox: '0 0 24 24',
        color,
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <IconElement />
}

export const WalletRefreshFilled = forwardRef(IconComponent)