import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IoMdDoneAll } from "react-icons/io";
import { notificationUtils } from "../../utils/notification.utilis";
import { QUERY_KEYS } from "../../Query/query-keys";

const NotificationItam = ({ mes}) => {
  const user = JSON.parse(localStorage.getItem("user")) || undefined;
  const time = mes?.createdAt.split("T");
  const querClient = useQueryClient();

  // edit Notification
  const editNotificationById = useMutation({
    mutationFn: notificationUtils.patchNatification,
    onSuccess: () => {
      querClient.invalidateQueries({ queryKey: [QUERY_KEYS.notification] });
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  // read by id
  const handleRead = (id) => {
      editNotificationById.mutate({
        watchedUserId: user?.id,
        id: id,
        status: "seen",
      });
  };

  return (
    <div className="d-flex justify-content-between  align-items-center">
      <div className="w-100">
        <p>{mes.message}</p>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-1">
            <p className="NotificationTime m-0 text-secondary">{time["0"]}</p>
            <p className="NotificationTime m-0 text-secondary">
              {time["1"].slice(0, 5)}
            </p>
          </div>
          <div className="d-flex align-items-center gap-1">
            <button
              className={`${mes.status === "new" ? "notifBtn" : "d-none"}`}
              onClick={() => handleRead(mes.id)}
            >
              <IoMdDoneAll size={23} />
            </button>
            <span
              className={`text-secondary ${
                mes.status === "new" ? "d-none" : ""
              }`}
            >
              <IoMdDoneAll size={23} />
            </span>
            {mes.type === "personal" ? (
              <span className="pesonal-notif btn text-white d-block btn-sm btn-success">
                {mes.type}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default NotificationItam;
