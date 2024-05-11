import { useState } from 'react';
import { useAuthContext } from './useAuthContext';


const useAddActivity = () => {
    const [addingActivityError, setError] = useState(null);
    const [addingActivityIsLoading, setIsLoading] = useState(null);
    const { user } = useAuthContext();

    const addActivity = (activityData) => {
        try {
            setIsLoading(true);
            const requestData = { ...activityData, currentParticipants: 0 };
            fetch('http://localhost:3000/activities', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(requestData)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add activity');
                }
                setIsLoading(false);
                setError(null);
                // Handle successful addition of activity (if needed)
                return response.json();
            })
            .then(_ => {
                window.location.reload();
            })

        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }

    return { addActivity, addingActivityError, addingActivityIsLoading };
}


export default useAddActivity;