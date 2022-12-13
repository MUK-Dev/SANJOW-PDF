import { Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

const PrivacyPolicies: FC = () => {
  return (
    <Stack w="100%" py="1em" px={{ base: '1em', md: '2em' }} gap="1em">
      <Text>
        Eudialyte LTD is a company incorporated under Cyprus law registered with
        the Cyprus Trade and company registered number HE416378, having its
        registered office at Chariton 6 flat/office 102, 1026, Nicosia, Cyprus
        (« NAME », Or « we »).
      </Text>
      <Text>PREAMBLE</Text>
      <Text>
        In operating the URL.com site, Eudialyte LTD is required to process data
        collected during navigation on the site. Eudialyte LTD is committed to
        respecting the law and taking the necessary measures to respect the
        privacy of users and to protect the data collected.
      </Text>
      <Text>OBJECT</Text>
      <Text>
        This section is intended to provide the user with the necessary
        information to understand how data is collected, processed, used and
        stored. Rights for which the law 78-17 of 6.01.78 on the legislation of
        the sector of "Data processing and liberties" provides measures and
        provisions.
      </Text>
      <Text>
        NATURE OF OPERATIONS AND PERSONAL DESTINATIONS PROCESSED AND COLLECTED
      </Text>
      <Text>
        The collection and processing of personal data occurs several times
        throughout the customer journey on URL.com. Thus, the user's personal
        data will be collected and processed during registration, payment,
        navigation and more generally throughout the actions carried out on
        URL.com. NAME may collect personal data from the user only with prior
        consent. Here are examples of the types of data collected:
        <br />
        Bank details facilitating payment
        <br />
        Business operating data: VAD conversation, comments
        <br />
        Identification data and facilitating invoicing such as: last name, first
        name, e-mail, etc ...
        <br />
        Connection data
        <br />
        Billing and payment status data
      </Text>
      <Text>DURATION AND ARCHIVING OF PERSONAL DATA</Text>
      <Text>
        NAME collects the personal data of its users for:
        <br />
        Carry out customer follow-up
        <br />
        Make payments and follow up on orders
        <br />
        Monitor customer satisfaction
        <br />
        Manage customer accounts and link them to service users
        <br />
        Adapt and personalize navigation to provide a better customer experience
        <br />
        It is possible that this personal data is potentially used only or
        simultaneously by the customer service of URL.com as well as certain
        subcontractors and business partners. NAME may authorize the
        consultation of this personal data only during a judicial investigation
        approved by a police or administrative requisition. The policy of
        retention period for collected and archived data is expressed in
        proportion to the duration of the subscription to the service.
      </Text>
      <Text>USER RIGHTS</Text>
      <Text>
        As included in the law of January 6, 1978, any user has the right to
        access the file of personal data collected concerning him and can thus
        request their rectification. Legitimately, each user has the right to
        object to the processing of personal data and to object for the purposes
        of commercial use and prospecting. Users also have the right to rectify,
        delete, block in the event of inaccuracy of the data. These rights also
        apply to incomplete or outdated personal data. Any request to exercise a
        right of rectification must be addressed to contact@url.com and
        accompanied by an identity document signed in copy.
      </Text>
      <Text>COOKIES AND TRACKERS</Text>
      <Text>
        NAME uses cookies, you can consult our Cookies policy on the dedicated
        page.
      </Text>
    </Stack>
  );
};

export default PrivacyPolicies;
