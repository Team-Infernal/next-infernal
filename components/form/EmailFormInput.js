import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const EmailFormInput = ({ email, setEmail, disabled, isVerified }) => {
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
				className="input input-bordered input-primary"
				disabled={disabled && "disabled"}
			/>
		</div>
	);
};

export default EmailFormInput;
