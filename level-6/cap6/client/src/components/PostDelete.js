

{
    if (!user) {
        return 
    }
    const response = await fetch('/api/post/' + post._id, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    })
    const json = await response.json()

    if (response.ok) {
        dispatch({type: 'DELETE_POST', payload: json})
    }
}