export default function SectionTitle({
    title,
    subtitle,
    className = '',
    align = 'center'
}) {
    const alignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return (
        <div className={`mb-12 ${alignClasses[align]} ${className}`}>
            {subtitle && (
                <p className="text-[#1E73BE] font-semibold text-sm uppercase tracking-wide mb-2">
                    {subtitle}
                </p>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937]">
                {title}
            </h2>
        </div>
    );
}



