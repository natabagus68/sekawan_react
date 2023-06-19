export default function InformationIcon({ width = 16, height = 16, ...props }) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={8} cy={8} r="7.4" stroke="white" strokeWidth="1.2" />
      <path d="M8.00732 6.95403C7.8283 6.95403 7.65661 7.02516 7.53003 7.15175C7.40344 7.27834 7.33232 7.45004 7.33232 7.62907V11.2293C7.33232 11.4083 7.40344 11.58 7.53003 11.7066C7.65661 11.8332 7.8283 11.9043 8.00732 11.9043C8.18635 11.9043 8.35804 11.8332 8.48462 11.7066C8.61121 11.58 8.68232 11.4083 8.68232 11.2293V7.62907C8.68232 7.45004 8.61121 7.27834 8.48462 7.15175C8.35804 7.02516 8.18635 6.95403 8.00732 6.95403ZM8.00732 4.55391C7.84415 4.55391 7.68465 4.60229 7.54898 4.69295C7.41331 4.78361 7.30757 4.91246 7.24512 5.06322C7.18268 5.21397 7.16634 5.37986 7.19818 5.5399C7.23001 5.69994 7.30858 5.84695 7.42396 5.96234C7.53934 6.07772 7.68634 6.1563 7.84637 6.18813C8.00641 6.21997 8.17229 6.20363 8.32304 6.14118C8.47379 6.07874 8.60264 5.97299 8.69329 5.83731C8.78394 5.70164 8.83232 5.54212 8.83232 5.37895C8.83232 5.16013 8.74541 4.95028 8.59069 4.79556C8.43597 4.64083 8.22613 4.55391 8.00732 4.55391Z" fill="white" stroke="white" strokeWidth="0.15" />
    </svg>
  )
}