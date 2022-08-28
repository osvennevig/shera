import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Dropdown = () => {
  const session = useSession();

  if (session.status === "loading") {
    return <></>;
  }

  return (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full flex flex-col justify-center ">
            {session?.data?.user?.image ? (
              <img
                src={session.data.user.image}
                className="rounded-full"
                alt="avatar"
              />
            ) : (
              <FontAwesomeIcon icon={faUser} size="2x" className="py-1" />
            )}
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href={"/profile"}>
              <a>Profile</a>
            </Link>
          </li>
          <li>
            <Link href={"/my-events"}>
              <a className="justify-between">
                My Events
                <span className="badge">New</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/api/auth/signout"}>
              <a>Logout</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
