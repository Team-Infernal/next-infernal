import { sendEmailVerification, User } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";

const EmailNotVerified = ({ user }: { user: User }) => {
	const router = useRouter();

	const [emailSent, setEmailSent] = useState("");
	const [resendEmailText, setResendEmailText] = useState(
		"Renvoyez un mail de vérification"
	);

	if (user === null) {
		router.push("/");
		return <></>;
	}

	const onSendVerificationEmailClick = () => {
		setResendEmailText("");
		sendEmailVerification(user)
			.then(() => {
				setEmailSent("sent");
			})
			.catch(() => {
				setEmailSent("error");
			});
	};

	if (emailSent === "sent") {
		return (
			<div className="alert alert-info">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="stroke-current flex-shrink-0 w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
					<span>Un lien de vérification a été envoyé à {user.email}.</span>
				</div>
			</div>
		);
	} else if (emailSent === "error") {
		return (
			<div className="alert alert-error">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="stroke-current flex-shrink-0 w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						></path>
					</svg>
					<span>
						Le lien de vérification n&apos;a pas pu être envoyé. Veuillez
						réessayer plus tard.
					</span>
				</div>
			</div>
		);
	}

	return (
		<div className="alert alert-warning">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/>
				</svg>
				<span>
					Votre adresse mail n&apos;a pas encore été vérifié. Veuillez consulter
					votre boîte mail.
				</span>
			</div>
			<div>
				<a
					className="link link-hover"
					onClick={() => onSendVerificationEmailClick()}
				>
					{resendEmailText}
				</a>
			</div>
		</div>
	);
};

export default EmailNotVerified;
