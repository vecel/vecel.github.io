interface TechTagProps {
    name: string
    small?: boolean
}

export default function TechTag({ name, small = false }: TechTagProps) {
    return (
        <div className={ `${ small ? 'text-xs' : 'text-sm' } w-fit pl-4 pr-4 mr-2 mb-2 bg-secondary-container text-primary rounded-2xl` }>
            { name }
        </div>
    )
}