export default function Title({ children, size, color, className, ...props }) {
	const sizes = {
		small: 'text-xs md:text-sm lg:text-base',
		medium: 'text-xl md:text-2xl lg:text-3xl',
		large: 'text-2xl md:text-3xl lg:text-4xl',
		default: 'text-xl md:text-2xl lg:text-3xl',
	};

    const colors = {
        default: 'text-default',
        primary: 'text-primary',
        secondary: 'text-secondary',
        success: 'text-success',
        warning: 'text-warning',
        error: 'text-error',
    };

	const classes = [
        sizes[size] || sizes.default,
        colors[color] || colors.default,
        className??'', 'font-semibold'].join(' ');

	return (
		<p className={classes} {...props}>
			{children}
		</p>
	);
}
