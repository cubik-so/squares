import React from 'react'
import dynamic from 'next/dynamic'
import { cn } from '@/utils/cn'

const Chart = dynamic(() => import('react-apexcharts').then((mod) => mod.default), {
    ssr: false,
})

type ColumnGraphProps = {
    chartData: {
        name: string
        // data: { x: string; y: number }[] | number[][];
        data: number[]
    }[]
    color: string[]
    theme: 'light' | 'dark'
    annotations?: ApexAnnotations
    className?: string
    xAxisType?: 'datetime' | 'category' | 'numeric'
    yAxisIsDollar?: boolean
    categories: string[]
}

export const ColumnGraph: React.FC<ColumnGraphProps> = ({
    chartData,
    color,
    theme,
    annotations,
    className,
    xAxisType,
    categories,
}) => {
    console.log('categories', categories)
    //const fontColor = theme === 'dark' ? 'white' : 'black';
    const textColorPrimary = theme === 'dark' ? 'white' : 'black'
    const textColorSecondary = theme === 'dark' ? '#999999' : '#666666'
    const surfaceColor = theme === 'dark' ? '#333333' : '#ffffff'
    //const gridColor = theme === 'dark' ? '#333333' : '#E0E0E0';
    //const crosshairBorderColor = theme === 'dark' ? '#7E7E7E' : '#1A1A1A';
    const chartAnnotations = annotations ? annotations : {}

    const data = {
        series: chartData,
        fill: {
            type: 'solid',
            opacity: 1,
            pattern: {
                style: ['#1199FF', '#F43F5E'], // string or array of strings
            },
        },
        options: {
            chart: {
                type: 'bar',
                stacked: false,
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
                parentHeightOffset: 0,
                sparkline: {
                    enabled: true,
                },
            },
            grid: {
                show: false,
                padding: { left: 0, right: 0, top: 0, bottom: 0 },
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                    ranges: [
                        {
                            from: 0,
                            to: 0,
                            color: color[0],
                        },
                    ],
                    colors: {
                        ranges: {
                            from: 0,
                            to: 500,
                            color: color[0],
                        },
                    },
                    borderRadius: 2,
                    borderRadiusApplication: 'round',
                },
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                colors: ['#1199FF', '#F43F5E'],
            },
            annotations: chartAnnotations,
            markers: {
                size: 0,
            },
            legend: {
                show: false,
                position: 'top',
                horizontalAlign: 'right',
                offsetX: -10,
            },
            yaxis: {
                lines: {
                    show: false,
                },
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                crosshairs: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
            },
            xaxis: {
                type: xAxisType,
                categories: categories,
            },
            // xaxis: {
            //   type: xAxisType,
            //   categories: categories,
            //   labels: {
            //     show: true,
            //   },
            //   lines: {
            //     show: false,
            //   },
            //   axisBorder: {
            //     show: false,
            //   },
            //   axisTicks: {
            //     show: false,
            //   },
            //   crosshairs: {
            //     show: false,
            //   },
            //   tooltip: {
            //     enabled: false,
            //   },
            // },
            tooltip: {
                //shared: true,
                theme: theme,
                custom: ({ series, dataPointIndex, w }: any) => {
                    const tooltipData = series.map((s: Record<string, any>) => {
                        return s[dataPointIndex]
                        //return index === 0 ? `$${s[dataPointIndex]}` : s[dataPointIndex];
                    })

                    // const timestamp = w.globals.seriesX[seriesIndex][dataPointIndex];
                    // console.log('timestamp', w.globals.seriesX);
                    // const date = new Date(timestamp).toLocaleDateString(undefined, {
                    //   day: 'numeric',
                    //   month: 'short',
                    //   year: 'numeric',
                    // });

                    const seriesHtml = tooltipData
                        .map((item: any, index: number) => {
                            return item
                                ? `<div
                  style="display: flex; align-items: flex-start; justify-content: flex-start;"
                >
                  <span
                    style="height: 10px; width: 10px; margin-top: 4px; background-color: ${color[index]}; border-radius: 50%; display: inline-block; margin-right: 8px;"
                  ></span>
                  <div
                    style="display: flex; flex-direction: column; align-items: start; justify-content: center;"
                  >
                    <div
                      style="font-size: 12px; color: ${textColorSecondary};"
                    >
                      ${w.globals.seriesNames[index]}
                    </div>
                    <span
                      style="font-size: 18px; color: ${textColorPrimary}; font-weight: 600;"
                    >
                      ${item}
                    </span>
                  </div>
                </div>`
                                : ''
                        })
                        .join('')

                    return `<div
                    style="background-color: ${surfaceColor}; border-radius: 8px; padding: 16px; width: 'fit-content'; box-shadow: 0 2px 4px rgba(0,0,0,0.1); display: inline-block; font-family: Arial, sans-serif; font-size: 14px;"
                  >
                    <div
                      style="margin-bottom: 16px; font-size: 14px; color: ${textColorPrimary};"
                    >
              ${categories[dataPointIndex]}
                    </div>
                    <div
                      style="display: flex; gap: 24px; flex-direction: row; align-items: flex-start; justify-content: flex-start;"
                    >
                      ${seriesHtml}
                    </div>
                  </div>`
                },
            },
        },
    }
    return (
        <div className={cn('', className)}>
            <Chart
                options={data.options as any}
                series={data.series}
                type={'bar'}
                height="100%"
                width="100%"
            />
        </div>
    )
}
