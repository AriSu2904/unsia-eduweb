import {Link} from 'react-router-dom';

export default function Header({
                                   heading,
                                   paragraph,
                                   linkName,
                                   linkUrl = "#"
                               }) {
    return (
        <div className="mb-10">
            <div className="flex justify-center">
                <img
                    alt="logo-unsia"
                    className="h-15"
                    src="https://media.licdn.com/dms/image/C4D1BAQFTQHFV72zX7A/company-background_10000/0/1630306633635/asia_cyber_university_cover?e=2147483647&v=beta&t=bcH2RUkqn1phXn_4xVQiqkIzNT25lJ2-up020SA1c-0"/>
            </div>
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
                {paragraph} {' '}
                <Link to={linkUrl} className="font-medium text-blue-900 hover:text-blue-500">
                    {linkName}
                </Link>
            </p>
        </div>
    )
}