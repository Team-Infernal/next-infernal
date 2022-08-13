import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const inputTypes = {
	primary: "input-primary",
	secondary: "input-secondary",
	accent: "input-accent",
	info: "input-info",
	success: "input-success",
	warning: "input-warning",
	error: "input-error",
};

const EmailFormInput = ({
	email,
	setEmail,
	disabled,
	isVerified,
	isError,
	type = "primary",
}: {
	email: string;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
	disabled?: boolean;
	isVerified?: boolean;
	isError?: boolean;
	type?:
		| "primary"
		| "secondary"
		| "accent"
		| "info"
		| "success"
		| "warning"
		| "error";
}) => {
	return (
		<div className="form-control">
			<label className="label">
				<span className="label-text">
					Adresse mail{" "}
					{isVerified && (
						<span className="text-success">
							<FontAwesomeIcon
								icon={faCheck}
								className="fa-fw"
							/>{" "}
							Verifiée
						</span>
					)}
				</span>
			</label>
			<input
				type="text"
				value={email}
				onChange={event => setEmail(event.target.value)}
				placeholder="john@exemple.fr"
				className={[
					"input",
					"input-bordered",
					isError ? "input-error" : inputTypes[type],
				].join(" ")}
				disabled={disabled}
			/>
		</div>
	);
};

export default EmailFormInput;
