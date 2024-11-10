import Link from 'next/link'

export type IconProps = React.HTMLAttributes<SVGElement> & { width?: number, height?: number }

export const HeaderLogo2 = ({
  className,
}: { className?: string }) => {
  return (
    <div className={`flex flex-row text-2xl max-h-12   ${className}`}>
      {/* <div className='bg-black text-white p-1 px-2 border border-gray-400 rounded-tl-sm rounded-bl-sm font-semibold'>
        TrendSenfoni
      </div> */}
      <div className='p-1 px-2 border border-gray-400 rounded-tl-sm rounded-bl-sm font-semibold'>
        <img src="/img/logo.png" className='aspect-square max-h-10' />
      </div>
      <div className='bg-white text-black p-1 border border-gray-400 rounded-tr-sm rounded-br-sm font-semibold relative'>
        b4b
      </div>
    </div>
  )
}