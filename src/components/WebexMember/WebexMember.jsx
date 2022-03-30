import React from 'react';
import PropTypes from 'prop-types';
import {DestinationType} from '@webex/component-adapter-interfaces';
import Spinner from '../generic/Spinner/Spinner';

import {
  useMembers,
  useMe,
  useOrganization,
  usePerson,
} from '../hooks';
import WebexAvatar from '../WebexAvatar/WebexAvatar';
import webexComponentClasses from '../helpers';

/**
 * Displays a webex meeting member.
 *
 * @param {object} props  Data passed to the component
 * @param {string} props.className  Custom CSS class to apply
 * @param {string} props.roomID  ID of the room for which to get members
 * @param {boolean} props.displayStatus  Whether or not to display the user's status
 * @param {string} props.personID  ID of the person for which to display avatar
 * @param {object} props.style  Custom style to apply
 * @returns {object} JSX of the component
 *
 */
export default function WebexMember({
  className,
  roomID,
  displayStatus,
  personID,
  style,
}) {
  const {displayName, orgID, emails} = usePerson(personID);
  const me = useMe();
  const members = useMembers(roomID, DestinationType.ROOM);
  const member = members
    .find((itemMember) => itemMember.ID === personID);
  const organization = useOrganization(orgID);

  const isExternal = orgID !== undefined && me.orgID !== undefined && me.orgID !== orgID;

  const emailDomain = emails?.[0]?.split('@')[1] || <i>Unknown organization</i>;
  const [cssClasses, sc] = webexComponentClasses('member', className);

  if (!member) {
    return null;
  }

  return (
    <div className={cssClasses} style={style}>
      <WebexAvatar personID={personID} displayStatus={displayStatus} className={sc('avatar')} />
      <div className={sc('details')}>
        <div className={sc('name')}>
          {(displayName ?? <Spinner size={18} />) || <i>Name not available</i>}
        </div>
        {isExternal && <div className={sc('organization')}>{organization.name || emailDomain}</div>}
      </div>
    </div>
  );
}

WebexMember.propTypes = {
  className: PropTypes.string,
  roomID: PropTypes.string.isRequired,
  displayStatus: PropTypes.bool,
  personID: PropTypes.string.isRequired,
  style: PropTypes.shape(),
};

WebexMember.defaultProps = {
  className: '',
  displayStatus: false,
  style: undefined,
};
