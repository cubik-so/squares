import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Receipt2Filled = (props: Props) =>
    CreateIcon({
        displayName: 'Receipt2Filled',
        paths: [
            {
                d: 'M8.57741 5.76368C9.03709 4.87064 9.26694 4.42412 9.57572 4.27944C9.84455 4.15348 10.1554 4.15348 10.4243 4.27944C10.7331 4.42412 10.9629 4.87064 11.4226 5.76368L12.6143 8.07877C12.6939 8.23349 12.7337 8.31085 12.7853 8.37917C12.831 8.43981 12.8835 8.49505 12.9417 8.54381C13.0073 8.59874 13.0825 8.64245 13.233 8.72989L15.6194 10.1166C16.4013 10.571 16.7922 10.7982 16.9237 11.0943C17.0383 11.3526 17.0383 11.6474 16.9237 11.9057C16.7922 12.2018 16.4013 12.429 15.6194 12.8834L13.233 14.2701C13.0825 14.3575 13.0073 14.4013 12.9417 14.4562C12.8835 14.505 12.831 14.5602 12.7853 14.6208C12.7337 14.6891 12.6939 14.7665 12.6143 14.9212L11.4226 17.2363C10.9629 18.1294 10.7331 18.5759 10.4243 18.7206C10.1554 18.8465 9.84455 18.8465 9.57572 18.7206C9.26694 18.5759 9.03709 18.1294 8.5774 17.2363L7.38572 14.9212C7.30608 14.7665 7.26625 14.6891 7.21474 14.6208C7.16902 14.5602 7.11653 14.505 7.0583 14.4562C6.9927 14.4013 6.91747 14.3575 6.76701 14.2701L4.38063 12.8834C3.59872 12.429 3.20777 12.2018 3.07632 11.9057C2.96166 11.6474 2.96166 11.3526 3.07632 11.0943C3.20777 10.7982 3.59872 10.571 4.38063 10.1166L6.76701 8.72989C6.91747 8.64245 6.9927 8.59874 7.0583 8.54381C7.11653 8.49505 7.16902 8.43981 7.21474 8.37917C7.26625 8.31085 7.30608 8.23349 7.38572 8.07877L8.57741 5.76368Z',
                fill: false,
                stroke: true,
            },
            {
                d: 'M17.4595 19.4062C17.2058 19.089 17.0789 18.9304 17.0314 18.7475C16.9895 18.5866 16.9895 18.4134 17.0314 18.2525C17.0789 18.0696 17.2058 17.911 17.4595 17.5938L18.2751 16.5744C18.5288 16.2572 18.6557 16.0986 18.802 16.0392C18.9307 15.9869 19.0693 15.9869 19.198 16.0392C19.3443 16.0986 19.4712 16.2572 19.7249 16.5744L20.5405 17.5938C20.7942 17.911 20.9211 18.0696 20.9686 18.2525C21.0105 18.4134 21.0105 18.5866 20.9686 18.7475C20.9211 18.9304 20.7942 19.089 20.5405 19.4062L19.7249 20.4256C19.4712 20.7428 19.3443 20.9014 19.198 20.9608C19.0693 21.0131 18.9307 21.0131 18.802 20.9608C18.6557 20.9014 18.5288 20.7428 18.2751 20.4256L17.4595 19.4062Z',
                fill: false,
                stroke: true,
            },
            {
                d: 'M18.2298 4.36247C18.1029 4.23559 18.0394 4.17215 18.0157 4.099C17.9948 4.03466 17.9948 3.96534 18.0157 3.901C18.0394 3.82785 18.1029 3.76441 18.2298 3.63753L18.6375 3.22976C18.7644 3.10289 18.8278 3.03945 18.901 3.01568C18.9653 2.99477 19.0347 2.99477 19.099 3.01568C19.1722 3.03945 19.2356 3.10289 19.3625 3.22976L19.7702 3.63753C19.8971 3.76441 19.9605 3.82785 19.9843 3.901C20.0052 3.96534 20.0052 4.03466 19.9843 4.099C19.9605 4.17215 19.8971 4.23559 19.7702 4.36247L19.3625 4.77024C19.2356 4.89711 19.1722 4.96055 19.099 4.98432C19.0347 5.00523 18.9653 5.00523 18.901 4.98432C18.8278 4.96055 18.7644 4.89711 18.6375 4.77024L18.2298 4.36247Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
