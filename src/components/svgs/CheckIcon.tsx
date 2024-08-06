
type Props = React.SVGProps<SVGSVGElement>

const CheckIcon = (props: Props) => {
    const {...svgProps} = props;

    return (
        <svg width="300px" height="300px" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke={`#ffffff`} {...svgProps} xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12.6111L8.92308 17.5L20 6.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default CheckIcon